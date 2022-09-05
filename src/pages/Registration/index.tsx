import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import { Container, Form } from './style';
import logo from '../../assets/logo.svg';
import { useAnalyst } from '../../providers/Analyst';
import { cpf } from 'cpf-cnpj-validator';

interface RegistrationData {
  farmer_name: string;
  farmer_email: string;
  farmer_cpf: string;
  latitude: number;
  longitude: number;
  tillage_type: string;
  harvest_date: Date;
  cause: string;
}

const Registration = () => {
  const date = new Date();

  const schema = yup.object().shape({
    farmer_name: yup.string().required('Campo obrigatório'),
    farmer_email: yup
      .string()
      .email('Insira um email válido')
      .required('Campo obrigatório'),
    farmer_cpf: yup
      .string()
      .test((value) => cpf.isValid(value!))
      .required('Campo obrigatório'),
    harvest_date: yup
      .string()
      .max(date.getFullYear(), 'Insira uma data válida')
      .required('Campo obrigatório'),
    latitude: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationData>({ resolver: yupResolver(schema) });

  const { signup } = useAnalyst();

  //   return (
  //     <Container>
  //       <Form onSubmit={handleSubmit(signup)}>
  //         <section>
  //           <Input
  //             label='Email'
  //             name='email'
  //             register={register}
  //             error={errors.email?.message}
  //           />
  //           <Input
  //             label='Nome de usuário'
  //             name='username'
  //             register={register}
  //             error={errors.username?.message}
  //           />
  //           <Input
  //             label='Senha'
  //             name='password'
  //             register={register}
  //             type='password'
  //             error={errors.password?.message}
  //           />
  //           <Button type='submit'>Cadastrar</Button>
  //         </section>
  //         <span className='span-bottom'>
  //           Já possui uma credencial?<Link to='/'>Faça login</Link>
  //         </span>
  //       </Form>
  //       <Footer />
  //     </Container>
  //   );
};

export default Registration;
