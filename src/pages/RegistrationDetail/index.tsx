import { useCallback, useEffect, useState } from 'react';
import { useRegistration } from '../../providers/Registration';
import { Container, InputContainer } from './style';
import { IRegistrationResponse } from '../../interfaces/Registration';
import RegistrationCard from '../../components/RegistrationCard';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';
import ModalUpdate from '../../components/Modal';

const RegistrationDetail = () => {
  const { registrationsList, getAllRegistrations } = useRegistration();

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const [filteredByCpfList, setFilteredByCpfList] = useState<
    IRegistrationResponse[]
  >([]);

  const getRegistrations = useCallback(() => {
    getAllRegistrations();
  }, [registrationsList]);

  useEffect(() => {
    getRegistrations();
  }, [registrationsList]);

  const filterByCpf = (inputCpf: string) => {
    const filteredCpf = registrationsList.filter(
      (element) => element.farmer_cpf === inputCpf
    );
    setFilteredByCpfList(filteredCpf);
  };

  const [registrationId, setRegistrationId] = useState("");
 

  return (
    <>
      {open && <ModalUpdate isOpen={open} onCloseModal={onCloseModal} registrationId={registrationId}/>}
      <Container>
        <h1>Comunicações de perda cadastradas</h1>
        <InputContainer>
          <label>Buscar por CPF</label>
          <input onChange={(event) => filterByCpf(event.target.value)} />
        </InputContainer>

        <ul>
          {filteredByCpfList.length > 0 ? (
            <>
              {filteredByCpfList.map((registration) => (
                <li key={registration.id}>
                  <RegistrationCard
                    onClick={onOpenModal}
                    id={registration.id}
                    farmer_name={registration.farmer_name}
                    farmer_email={registration.farmer_email}
                    last_modified={registration.last_modified}
                  />
                </li>
              ))}
            </>
          ) : (
            registrationsList.map((registration) => (
              <li key={registration.id}>
                <RegistrationCard
                  onClick={() => {
                    setRegistrationId(registration.id)
                    onOpenModal;
                  }}
                  id={registration.id}
                  farmer_name={registration.farmer_name}
                  farmer_email={registration.farmer_email}
                  last_modified={registration.last_modified}
                />
              </li>
            ))
          )}
        </ul>
        <Footer />
      </Container>
    </>
  );
};

export default RegistrationDetail;
