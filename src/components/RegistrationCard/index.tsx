import { Container } from './style';
import PinFile from '../../assets/pinfile.svg';

interface RegistrationResponse {
  id: string;
  farmer_name: string;
  farmer_email: string;
  last_modified?: Date;
}

const RegistrationCard = ({
  farmer_name,
  farmer_email,
  last_modified,
}: RegistrationResponse) => {
  const formatedDate = last_modified?.toString().split('-').reverse().join('/');
  return (
    <Container>
      <img src={PinFile} />
      <section>
        <span className='farmer-name'>{farmer_name}</span>
        <span>{farmer_email}</span>
        <span>Última modificação: {formatedDate}</span>
      </section>
    </Container>
  );
};

export default RegistrationCard;
