import { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';
import toast from 'react-hot-toast';
import {IAnalystRegisterProps, IAnalystLoginProps, IAnalystContext} from '../../interfaces/Analyst'

interface AnalystProviderProps {
  children: React.ReactNode;
}

const AnalystContext = createContext<IAnalystContext>({} as IAnalystContext);

const AnalystProvider = ({ children }: AnalystProviderProps) => {
  const history = useHistory();

  const signup = async (analyst: IAnalystRegisterProps) => {
    await api
      .post('analysts/', analyst)
      .then((_) => {
        toast.success('Credencial criada com sucesso')
        return history.push('/')
      })
      .catch((_) => toast.error('Algo deu errado'));
  };

  const login = async (analyst: IAnalystLoginProps) => {
    await api
      .post('login/', analyst)
      .then((res) => {
        localStorage.setItem('@proagro:auth', JSON.stringify(res.data));
        return history.push('/dashboard');
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
