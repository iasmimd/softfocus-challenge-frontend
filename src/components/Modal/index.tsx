import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useRegistration } from '../../providers/Registration';
import Select from '../../components/Select';
import { IRegistrationProps } from '../../interfaces/Registration';
import ReactModal from 'react-modal';
import { CgCloseR } from 'react-icons/cg';

interface ModalProps {
  isOpen: any;
  onCloseModal: any;
  registrationId: string;
}

const ModalUpdate = ({ isOpen, onCloseModal }: any) => {
  const schema = yup.object().shape({
    farmer_email: yup.string().email('Insira um email válido'),
    latitude: yup.string(),
    longitude: yup.string(),
    tillage_type: yup.string(),
    cause: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationProps>({ resolver: yupResolver(schema) });

  const { uptadeRegistration, deleteRegistration } = useRegistration();

  const selectOptions = [
    'Chuva excessiva',
    'Geada',
    'Granizo',
    'Seca',
    'Vendaval',
    'Raio',
  ];

  const updateRegistrationCallback = (data: any) => {
    uptadeRegistration(data);
    onCloseModal();
  };

  const deleteRegistrationCallback = () => {
    deleteRegistration();
    onCloseModal();
  };

  return (
    <>
      <ReactModal isOpen={isOpen} ariaHideApp={false} className='modal'>
        <form onSubmit={handleSubmit(updateRegistrationCallback)}>
          <CgCloseR onClick={onCloseModal} />
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
            <div className='button-div'>
              <Button type='submit'>Atualizar</Button>
              <Button type='button' onClick={deleteRegistrationCallback}>
                Deletar
              </Button>
            </div>
          </section>
        </form>
      </ReactModal>
    </>
  );
};

export default ModalUpdate;
