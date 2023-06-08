import styled, { css } from 'styled-components';

const Footer = styled.footer`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.bg_secondary};
    padding: 9.8rem 0 9.8rem 0;
  `}
`;

const ContentFooter = styled.div`
  ${({ theme }) => css`
    max-width: 128rem;

    display: flex;

    justify-content: space-between;
    margin: 0 auto;
  `}
`;

const ContainerLogoAndDescription = styled.div`
  ${({ theme }) => css`
    width: 54rem;
    background-color: ${theme.colors.bg_secondary};

    p {
      font-weight: 400;
      font-size: ${theme.font.small};
      color: ${theme.colors.text_primary};
      margin-bottom: 3.6rem;
    }

    div {
      display: flex;
      align-items: center;
      height: 3.1rem;
      gap: 1.6rem;

      a {
        width: 3.2rem;
        height: 100%;
        border-radius: 0.5rem;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  `}
`;

const ContainerLinks = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    h2 {
      color: #000000;
      font-size: ${theme.font.small};
      font-weight: 600;
      margin-bottom: 1.9rem;
    }

    a {
      color: #000000;
      font-size: ${theme.font.small};
      font-weight: 400;
      margin-bottom: 4.2rem;
    }
  `}
`;

const CheckUpMedico = styled.div`
  ${({ theme }) => css`
    width: 41.6rem;

    h2 {
      margin-bottom: 3.7rem;
      color: #000000;
      font-size: ${theme.font.small};
      font-weight: 600;
    }
  `}
`;

const FormCheckUpMedico = styled.form`
  ${({ theme }) => css`
    width: 100%;

    input {
      outline: none;
      background-color: ${theme.colors.text_primary};
      border-radius: 0.5rem;
      border: 0 none;

      width: 100%;
      padding: 1.2rem 2.8rem;
      color: #ffffff;
      font-size: ${theme.font.small};
      font-weight: 500;
      margin-bottom: 3.3rem;
    }
  `}
`;

export {
  Footer,
  ContainerLogoAndDescription,
  ContainerLinks,
  CheckUpMedico,
  FormCheckUpMedico,
  ContentFooter,
};
