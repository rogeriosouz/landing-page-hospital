import { ButtonHTMLAttributes } from 'react';
import * as s from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  typeButton: 'normal' | 'login';
}

export function Button({ title, typeButton, ...rest }: ButtonProps) {
  return (
    <s.Button typeButton={typeButton} {...rest}>
      {title}
    </s.Button>
  );
}
