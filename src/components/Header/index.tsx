import Button from '../Button';
import { Container } from './style';
import { useHistory } from 'react-router-dom';
import { useAnalyst } from '../../providers/Analyst';

const Header = () => {
  const history = useHistory();

  const goTo = (path: string) => {
    return history.push(path);
  };

  const { setAutentication, autentication } = useAnalyst();

  const logOut = () => {
    setAutentication(false);
    localStorage.clear();
    return history.push('/');
  };

  return (
    <Container>
      <Button onClick={() => goTo('/dashboard')}>Dashboard</Button>
      <Button onClick={() => goTo('/registrar-comunicação')}>
        Cadastrar comunicações
      </Button>
      <Button onClick={() => goTo('/comunicações')}>Comunicações</Button>
      <Button onClick={logOut}>Sair</Button>
    </Container>
  );
};

export default Header;
