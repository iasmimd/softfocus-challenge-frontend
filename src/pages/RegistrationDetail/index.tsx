import { useCallback, useEffect, useState } from 'react';
import { useRegistration } from '../../providers/Registration';
import { Container, InputContainer } from './style';
import { IRegistrationResponse } from '../../interfaces/Registration';
import RegistrationCard from '../../components/RegistrationCard';
import Footer from '../../components/Footer';
import ModalUpdate from '../../components/Modal';
import { Redirect } from 'react-router-dom';
import Header from '../../components/Header';

const RegistrationDetail = ({ autentication }: any) => {
  const { registrationsList, getAllRegistrations } = useRegistration();

  const [open, setOpen] = useState(false);

  const onOpenModal = (id: string) => {
    setOpen(true);
    setRegistrationId(id);
  };

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

  const { setRegistrationId } = useRegistration();

  if (!autentication) {
    return <Redirect to='/' />;
  }

  return (
    <>
      {open && <ModalUpdate isOpen={open} onCloseModal={onCloseModal} />}
      <Header />
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
                <li>
                  <RegistrationCard
                    key={registration.id}
                    onClick={() => onOpenModal(registration.id)}
                    id={registration.id}
                    farmer_name={registration.farmer_name}
                    farmer_email={registration.farmer_email}
                    latitude={registration.latitude}
                    longitude={registration.longitude}
                    tillage_type={registration.tillage_type}
                    cause={registration.cause}
                    is_duplicate_registration={
                      registration.is_duplicate_registration
                    }
                    last_modified={registration.last_modified}
                  />
                </li>
              ))}
            </>
          ) : (
            registrationsList.map((registration) => (
              <>
                <li>
                  <RegistrationCard
                    key={registration.id}
                    onClick={() => onOpenModal(registration.id)}
                    id={registration.id}
                    farmer_name={registration.farmer_name}
                    farmer_email={registration.farmer_email}
                    latitude={registration.latitude}
                    longitude={registration.longitude}
                    tillage_type={registration.tillage_type}
                    cause={registration.cause}
                    is_duplicate_registration={
                      registration.is_duplicate_registration
                    }
                    last_modified={registration.last_modified}
                  />
                </li>
              </>
            ))
          )}
        </ul>
        <Footer />
      </Container>
    </>
  );
};

export default RegistrationDetail;
