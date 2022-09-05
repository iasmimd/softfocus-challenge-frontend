import { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import toast from 'react-hot-toast';

interface AnalystProviderProps {
  children: React.ReactNode;
}

interface AnalystRegisterProps {
  email: string;
  username: string;
  password: string;
}

interface AnalystLoginProps {
  username: string;
  password: string;
}

interface AnalystContext {
  signup: (analyst: AnalystRegisterProps) => Promise<void>
  login: (analyst: AnalystLoginProps) => Promise<void>;
}

const AnalystContext = createContext<AnalystContext>({} as AnalystContext);

const AnalystProvider = ({ children }: AnalystProviderProps) => {
  const history = useHistory();

  const signup = async (analyst: AnalystRegisterProps) => {
    await api
      .post('analysts/', analyst)
      .then((res) => {
        console.log('cadastrou');
      })
      .catch((_) => toast.error('Algo deu errado'));
  };

  const login = async (analyst: AnalystLoginProps) => {
    await api
      .post('login/', analyst)
      .then((res) => {
        return history.push('/dashboard')
      })
      .catch((_) => toast.error('Nome de usuário ou senha incorretos'));
  };

  return (
    <AnalystContext.Provider value={{ signup, login }}>
      {children}
    </AnalystContext.Provider>
  );
};

const useAnalyst = () => {
  const context = useContext(AnalystContext);

  return context;
};

export { AnalystProvider, useAnalyst };
