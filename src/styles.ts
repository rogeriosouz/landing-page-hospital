import styled, { css } from 'styled-components';

const MainContainer = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;

const SectionFinally = styled.section`
  ${({ theme }) => css`
    width: 100%;
    max-width: 128rem;

    margin: 10rem auto 10rem auto;
    background-color: ${theme.colors.text_primary};
    border-radius: 0.5rem;
    padding: 7.4rem 8.2rem;

    h2 {
      color: #ffffff;
      font-size: ${theme.font.medium};
      text-transform: capitalize;
      font-weight: 600;
      width: 67.7rem;
      margin-bottom: 7.2rem;
    }

    div {
      width: 100%;
      height: 5.4rem;
      display: flex;

      justify-content: space-between;
      border-radius: 0.5rem;

      p {
        color: #ffffff;
        height: 100%;
        font-size: ${theme.font.small};
        font-weight: 500;

        height: 100%;

        display: flex;
        align-items: flex-end;
        text-transform: capitalize;
        margin-bottom: 7.2rem;
      }
    }
  `}
`;

export { MainContainer, SectionFinally };
