import { useCallback, useEffect, useState } from 'react';
import { useRegistration } from '../../providers/Registration';
import { Container, InputContainer } from './style';
import { IRegistrationResponse } from '../../interfaces/Registration';
import RegistrationCard from '../../components/RegistrationCard';
import Footer from '../../components/Footer';

const RegistrationDetail = () => {
  const { registrationsList, getAllRegistrations } = useRegistration();

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

  return (
    <Container>
      <h1>Comunicações de perdas cadastradas</h1>
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
  );
};

export default RegistrationDetail;
