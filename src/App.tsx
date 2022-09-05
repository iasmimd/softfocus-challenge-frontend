import Routes from './routes';
import CreateGlobalStyle from './styles/global';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{ style: { fontFamily: 'Inter' } }}
      />
      <CreateGlobalStyle />
      <Routes />
    </>
  );
};

export default App;
