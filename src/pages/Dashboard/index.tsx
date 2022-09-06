import Header from '../../components/Header';
import SectionCard from '../../components/SectionCard';
import file from '../../assets/files.svg';
import { Container } from './style';
import Footer from '../../components/Footer';
import nature from '../../assets/nature.svg';
import { Redirect, useHistory } from 'react-router-dom';

const Dashboard = ({ autentication }: any) => {
  const history = useHistory();

  if (!autentication) {
    return <Redirect to='/' />;
  }

  return (
    <Container>
      <Header />
      <section className='analyst-area'>
        <div className='analyst-functions'>
          <div className='page-description'>
            <h1>Área do analista</h1>
            <p>
              Cadastre, atualize e exclua comunicações de perda de uma maneira
              simplificada.
            </p>
          </div>
          <SectionCard
            img={file}
            title='Cadastrar uma nova comunicação de perda.'
            description='Cadastre uma comunicação de perda, a partir dos dados do produtor.'
            onClick={() => history.push('/registrar-comunicação')}
          />
          <SectionCard
            img={file}
            title='Buscar comunicações de perda.'
            description='Liste os registros cadastrados, e busque uma comunicação pelo CPF do produtor.'
            onClick={() => history.push('/comunicações')}
          />
        </div>
        <img src={nature} className='nature-image' />
      </section>
      <Footer />
    </Container>
  );
};

export default Dashboard;
