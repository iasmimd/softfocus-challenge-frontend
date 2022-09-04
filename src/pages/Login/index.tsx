import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import { Container, Form } from './style';
import logo from '../../assets/logo.svg'

interface RegisterUser {
  username: string;
  password: string;
}

const Login = () => {
  const schema = yup.object().shape({
    username: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>({ resolver: yupResolver(schema) });

  return (
    <Container>
      <img src={logo}/>
      <Form>
        <span className='top-span'>Faça login, e gerencie comunicações de perda.</span>
        <section>
        <Input
          label='Nome de usuário'
          name='username'
          register={register}
          error={errors.username?.message}
        />
        <Input
          label='Senha'
          name='password'
          register={register}
          error={errors.password?.message}
        />
        <Button>Logar</Button>
        </section>
        <span className='bottom-span'>Ainda não criou uma credencial? Cadastre-se aqui</span>
      </Form>
      <Footer />
    </Container>
  );
};

export default Login;
