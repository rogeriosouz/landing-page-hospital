import styled, { css } from 'styled-components';

const SectionOurServices = styled.section`
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

const SectionOurServicesContainerText = styled.div`
  ${({ theme }) => css`
    text-align: center;
    width: 100%;
    margin-bottom: 14.6rem;

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

const SectionOurServicesContainerGrid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 8.7rem;
  `}
`;

const ItemGrid = styled.div`
  ${({ theme }) => css`
    width: 38rem;
    height: 22.9rem;
    position: relative;
    margin: 0 auto;
    background: #ffffff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img {
      width: 12.4rem;
      height: 11.1rem;
      position: absolute;
      bottom: 85%;
      left: 50%;
      transform: translateX(-50%);
    }

    h2 {
      font-size: ${theme.font.small};
      color: ${theme.colors.text_primary};
      text-transform: capitalize;
      font-weight: 600;
      margin-bottom: 1.5rem;
    }

    p {
      font-size: ${theme.font.small};
      color: ${theme.colors.text_secondary};
      text-transform: capitalize;
      font-weight: 600;
    }
  `}
`;

export {
  SectionOurServices,
  SectionOurServicesContainerText,
  SectionOurServicesContainerGrid,
  ItemGrid,
};
