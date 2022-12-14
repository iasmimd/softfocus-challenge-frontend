import Routes from './routes';
import CreateGlobalStyle from './styles/global';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';

const App = () => {
  return (
    <>
      <CreateGlobalStyle />
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{ style: { fontFamily: 'Nunito' } }}
      />      
      <Routes />
    </>
  );
};

export default App;
