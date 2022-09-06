import Routes from './routes';
import CreateGlobalStyle from './styles/global';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <>
        <CreateGlobalStyle />
      <Toaster
        position='top-center'
        reverseOrder={false}
        toastOptions={{ style: { fontFamily: 'Inter' } }}
      />
      <Routes />
    </>
  );
};

export default App;
