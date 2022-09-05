import { Container } from './style';

interface SectionCardProps {
  img: string;
  title: string;
  description: string;
}

const SectionCard = ({ img, title, description }: SectionCardProps) => {
  return (
    <Container>
      <img src={img} />
      <div>
        <title>{title}</title>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default SectionCard;
