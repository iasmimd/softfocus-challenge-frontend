import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useRegistration } from '../../providers/Registration';
import Select from '../../components/Select';
import { IRegistrationProps } from '../../interfaces/Registration';
// import ReactModal from 'react-modal';
import { Modal } from 'react-responsive-modal';

const ModalUpdate = ({ onOpenModal, onCloseModal }: any) => {
  const schema = yup.object().shape({
    farmer_email: yup
      .string()
      .email('Insira um email válido')
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
    <>
      <Modal
        open={onOpenModal}
        onClose={() => onCloseModal(false)}
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal',
        }}
      >
        <form onSubmit={handleSubmit(createRegistration)}>
          <section className='inputs-form'>
            <Input
              label='Email'
              name='farmer_email'
              register={register}
              error={errors.farmer_email?.message}
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
            <section className='select-options'>
              <Select
                label='Causa'
                name='cause'
                register={register}
                error={errors.cause?.message}
              >
                {selectOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Select>
            </section>
            <Button type='submit'>Atualizar</Button>
            <Button>Deletar</Button>
          </section>
        </form>
      </Modal>
    </>
  );
};

export default ModalUpdate;
