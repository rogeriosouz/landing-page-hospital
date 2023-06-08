import styled, { css } from 'styled-components';

const SectionInitial = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 128rem;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    align-items: center;

    gap: 1.6rem;

    img {
      width: 63.2rem;
      height: 68.5rem;
      transform: translateY(-45px);
    }
  `}
`;

const SectionInitialContainerText = styled.section`
  ${({ theme }) => css`
    width: 100%;

    h1 {
      font-size: ${theme.font.big};
      color: ${theme.colors.text_primary};
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: 3.2rem;
      line-height: 61px;
    }

    p {
      font-size: ${theme.font.small};
      color: ${theme.colors.text_secondary};
      font-weight: 700;
      text-transform: capitalize;
      margin-bottom: 3rem;
    }
  `}
`;

export { SectionInitial, SectionInitialContainerText };
