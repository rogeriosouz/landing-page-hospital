import styled, { css } from 'styled-components';

const SectionAboutUs = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 128rem;
    min-height: 100vh;
    margin: 0 auto;
    align-items: center;
    gap: 4.6rem;
    display: flex;

    img {
      width: 60.2rem;
      height: 60.1rem;
    }
  `}
`;

const SectionAboutUsContainerText = styled.div`
  ${({ theme }) => css`
    width: 100%;

    text-align: left;

    span {
      font-size: ${theme.font.small};
      color: ${theme.colors.text_primary};
      text-transform: capitalize;
      font-weight: 600;
      margin-bottom: 2rem;
      display: block;
    }

    h2 {
      font-weight: 600;
      font-size: ${theme.font.medium};
      text-transform: capitalize;
      margin-bottom: 3.2rem;
    }

    p {
      font-size: ${theme.font.small};
      color: ${theme.colors.text_secondary};
      text-transform: capitalize;
      font-weight: 500;
      margin-bottom: 6.5rem;
    }
  `}
`;

export { SectionAboutUs, SectionAboutUsContainerText };
