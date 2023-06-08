import styled, { css } from 'styled-components';

const SectionOurDoctors = styled.section`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    background-color: ${theme.colors.bg_secondary};

    img {
      width: 100%;
    }
  `}
`;

const SectionOurDoctorsContainerText = styled.div`
  ${({ theme }) => css`
    text-align: center;
    width: 100%;
    margin-bottom: 8.2rem;

    p {
      font-size: ${theme.font.small};
      color: ${theme.colors.text_primary};
      text-transform: capitalize;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    h2 {
      width: 63.2rem;
      margin: 0 auto;
      font-weight: 600;
      font-size: ${theme.font.medium};
      color: ${theme.colors.text_primary};
      text-transform: capitalize;
    }
  `}
`;

const SectionOurDoctorsContainerGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1.6rem;
    max-width: 128rem;
    margin: 0 auto;
    margin-bottom: 8.4rem;
  `}
`;

const ItemGrid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 37.7rem;
    position: relative;
    display: flex;
    text-align: left;

    img {
      width: 100%;
      height: 100%;
    }
  `}
`;

const ContentGrid = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    width: 26rem;
    min-height: 13.9rem;
    padding: 1.3rem 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    background-color: #ffff;
    border-radius: 0.5rem;

    h3 {
      font-weight: 700;
      font-size: ${theme.font.small};
      color: ${theme.colors.text_primary};
    }

    p {
      font-weight: 400;
      font-size: ${theme.font.small};
      color: ${theme.colors.text_primary};
    }
  `}
`;

const FlexIcons = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: 1.3rem;
  `}
`;

export {
  SectionOurDoctors,
  SectionOurDoctorsContainerText,
  SectionOurDoctorsContainerGrid,
  ItemGrid,
  FlexIcons,
  ContentGrid,
};
