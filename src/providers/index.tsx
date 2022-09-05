import { AnalystProvider } from './Analyst';
import { RegistrationProvider } from './Registration';

interface AppProvider {
  children: React.ReactNode;
}

const Provider = ({ children }: AppProvider) => {
  return (
    <AnalystProvider>
      <RegistrationProvider>{children}</RegistrationProvider>
    </AnalystProvider>
  );
};

export default Provider;
