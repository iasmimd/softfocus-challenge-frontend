import { Container } from './style';
 
interface ChildrenProps {
  children: React.ReactNode
}

const Card = ({children}: ChildrenProps) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default Card