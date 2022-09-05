import { AnalystProvider } from './Analyst';

interface AppProvider {
  children: React.ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return <AnalystProvider>{children}</AnalystProvider>;
};

export default Provider;
