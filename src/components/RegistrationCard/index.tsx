import { Container } from './style';
 
interface ChildrenProps {
  children: React.ReactNode
}

const RegistrationCard = ({children}: ChildrenProps) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default RegistrationCard