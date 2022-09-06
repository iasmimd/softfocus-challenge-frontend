import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import toast from 'react-hot-toast';
import {
  IRegistrationProps,
  IRegistrationContext,
  IRegistrationUpdate,
} from '../../interfaces/Registration';
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

  const [registrationId, setRegistrationId] = useState('');

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
  };

  const uptadeRegistration = async (registration: IRegistrationUpdate) => {
    await api
      .patch(`registrations/detail/${registrationId}/`, registration)
      .then((_) => toast.success('Comunicação atualizada com sucesso'))
      .catch((_) => toast.error('Algo deu errado'));
  };

  const deleteRegistration = async () => {
    await api
      .delete(`registrations/detail/${registrationId}/`)
      .then((_) => toast.success('Comunicação deletada com sucesso'))
      .catch((_) => toast.error('Algo deu errado'));
  };

  return (
    <RegistrationContext.Provider
      value={{
        createRegistration,
        getAllRegistrations,
        registrationsList,
        uptadeRegistration,
        setRegistrationId,
        deleteRegistration
      }}
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
