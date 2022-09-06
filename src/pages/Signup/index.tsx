import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import { Container, Form } from './style';
import logo from '../../assets/logo.svg';
import { useAnalyst } from '../../providers/Analyst';
import { IAnalystRegisterProps } from '../../interfaces/Analyst';

const Signup = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Insira um email válido')
      .required('Campo obrigatório'),
    username: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IAnalystRegisterProps>({ resolver: yupResolver(schema) });

  const { signup } = useAnalyst();

  return (
    <Container>
      <div className='logo'>
        <img src={logo} />
        <p>Proagro</p>
      </div>
      <Form onSubmit={handleSubmit(signup)}>
        <section>
          <Input
            label='Email'
            name='email'
            register={register}
            error={errors.email?.message}
          />
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
            type='password'
            error={errors.password?.message}
          />
          <Button type='submit'>Cadastrar</Button>
        </section>
        <span className='span-bottom'>
          Já possui uma credencial?<Link to='/'>Faça login</Link>
        </span>
      </Form>
      <Footer />
    </Container>
  );
};

export default Signup;
