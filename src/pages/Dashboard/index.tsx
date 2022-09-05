import Header from '../../components/Header';
import SectionCard from '../../components/SectionCard';
import file from '../../assets/files.svg';

const Dashboard = () => {
  return (
    <>
      <Header />
      <SectionCard
        img={file}
        title='Cadastrar uma nova comunicação de perda.'
        description='Cadastre uma comunicação de perda, a partir dos dados do produtor.'
      />
    </>
  );
};

export default Dashboard;
