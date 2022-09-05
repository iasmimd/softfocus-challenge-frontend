import { Container } from './style';

interface SectionCardProps {
  img: string;
  title: string;
  description: string;
  onClick: () => void
}

const SectionCard = ({ img, title, description, onClick, ...rest }: SectionCardProps) => {
  return (
    <Container  onClick={onClick} {...rest}>
      <img src={img} />
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default SectionCard;
