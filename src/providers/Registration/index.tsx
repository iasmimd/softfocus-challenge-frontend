import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import toast from 'react-hot-toast';
import {IRegistrationProps, IRegistrationContext, IRegistrationUpdate} from '../../interfaces/Registration'
import { ThemeContext } from 'styled-components';

interface RegistrationProviderProps {
  children: React.ReactNode;
}

const RegistrationContext = createContext<IRegistrationContext>(
  {} as IRegistrationContext
);

const RegistrationProvider = ({ children }: RegistrationProviderProps) => {
  const history = useHistory();

  const [registrationsList, setRegistrationsList] = useState([]);

  const auth = JSON.parse(localStorage.getItem('@proagro:auth') || '{}');

  const createRegistration = async (registration: IRegistrationProps) => {
    await api
      .post(`registrations/${auth.user_id}/`, registration)
      .then((res) => {
        toast.success('Comunicação registrada com sucesso');
        getAllRegistrations();
        return history.push('/dashboard');
      })
      .catch((_) => toast.error('Algo deu errado'));
  };

  const getAllRegistrations = async () => {
    await api
      .get('registrations/')
      .then((res) => setRegistrationsList(res.data))
      .catch((err) => console.log(err));
  };

  const uptadeRegistration = async (id:string, registration:IRegistrationUpdate) => {
    await api.patch(`registrations/detail/${id}/`, registration)
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err))
  }

  return (
    <RegistrationContext.Provider
      value={{ createRegistration, getAllRegistrations, registrationsList, uptadeRegistration }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

const useRegistration = () => {
  const context = useContext(RegistrationContext);

  return context;
};

export { RegistrationProvider, useRegistration };
