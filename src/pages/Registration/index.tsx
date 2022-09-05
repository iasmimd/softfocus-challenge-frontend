import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import { Container, Form } from './style';
import logo from '../../assets/logo.svg';
import { cpf } from 'cpf-cnpj-validator';
import { useRegistration } from '../../providers/Registration';
import Select from '../../components/Select';
import {IRegistrationProps} from '../../interfaces/Registration'



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
      .test('Testando CPF inválido', 'Insira um CPF válido', (value) =>
        cpf.isValid(value!)
      )
      .required('Campo obrigatório'),
    harvest_date: yup
      .string()
      .max(date.getFullYear(), 'Insira uma data válida')
      .required('Campo obrigatório'),
    latitude: yup.string().required('Campo obrigatório'),
    longitude: yup.string().required('Campo obrigatório'),
    tillage_type: yup.string().required('Campo obrigatório'),
    cause: yup.string().required('Campo obrigatório'),
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationProps>({ resolver: yupResolver(schema) });
  
  const { createRegistration } = useRegistration();

  const selectOptions = [
    'Chuva excessiva',
    'Geada',
    'Granizo',
    'Seca',
    'Vendaval',
    'Raio',
  ];
  

  return (
    <Container>
      <h1>Cadastro de comunicação de perda</h1>
      <Form onSubmit={handleSubmit(createRegistration)}>
        <section className='inputs-form'>
          <Input
            label='Nome'
            name='farmer_name'
            register={register}
            error={errors.farmer_name?.message}
          />
          <Input
            label='Email'
            name='farmer_email'
            register={register}
            error={errors.farmer_email?.message}
          />
          <Input
            label='CPF'
            name='farmer_cpf'
            register={register}
            error={errors.farmer_cpf?.message}
          />
            <Input
              label='Latitude'
              name='latitude'
              register={register}
              error={errors.latitude?.message}
            />
            <Input
              label='Longitude'
              name='longitude'
              register={register}
              error={errors.longitude?.message}
            />
          <Input
            label='Tipo de lavoura'
            name='tillage_type'
            register={register}
            error={errors.tillage_type?.message}
          />
          <Input
            label='Data da colheita'
            name='harvest_date'
            register={register}
            error={errors.harvest_date?.message}
          />
          <section className='select-options'>
            <Select
              label='Causa'
              name='cause'
              register={register}
              error={errors.cause?.message}
            >
              {selectOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </Select>
          </section>
          <Button type='submit'>Cadastrar</Button>
        </section>
      </Form>
      <Footer />
    </Container>
  );
};

export default Registration;
