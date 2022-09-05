import { InputHTMLAttributes, SelectHTMLAttributes } from 'react';
import { Container } from './style';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  name: string;
  register: any;
  error?: any;
  children: React.ReactNode;
}

const Select = ({
  label,
  name,
  register,
  error,
  children,
  ...rest
}: SelectProps) => {
  return (
    <Container>
      <div>
        {label} {error && <span> - {error} </span>}
      </div>
      <select {...register(name)} {...rest}>
        {children}
      </select>
    </Container>
  );
};

export default Select;
