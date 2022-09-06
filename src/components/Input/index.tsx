import { InputHTMLAttributes } from 'react';
import { Container } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  register: any;
  error?: any;
}

const Input = ({ label, name, register, error, ...rest }: InputProps) => {
  return (
    <Container>
      <div>
        {label} {error && <span> - {error} </span>}
      </div>
      <input {...register(name)} {...rest} />
    </Container>
  );
};

export default Input;
