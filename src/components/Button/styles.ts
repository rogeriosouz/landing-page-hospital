import styled, { css } from 'styled-components';
import { ButtonProps } from '.';

type ContainerProps = Pick<ButtonProps, 'typeButton'>;

const Button = styled.button<ContainerProps>`
  ${({ theme, typeButton }) => css`
    ${typeButton === 'login'
      ? css`
          border: 0.2rem solid #0099ff;
          background-color: transparent;
          color: ${theme.colors.primary};
        `
      : css`
          color: #ffffff;
          border: none;
          background-color: ${theme.colors.primary};
        `}

    padding: 1.3rem  7.4rem;
    border-radius: 0.5rem;
    font-weight: 500;
    font-size: ${theme.font.small};
  `}
`;

export { Button };
