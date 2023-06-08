import styled, { css } from 'styled-components';

const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 5.4rem;
    max-width: 128rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 3.5rem auto 0 auto;
  `}
`;

const Navigation = styled.nav`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 4.1rem;

    a {
      font-size: ${theme.font.small};
      font-weight: 500;
    }
  `}
`;

export { Header, Navigation };
