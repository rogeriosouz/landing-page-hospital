import styled, { css } from 'styled-components';

const TestimonialsSection = styled.section`
  ${({ theme }) => css`
    width: 100%;
    min-height: 100vh;
    max-width: 128rem;
    margin: auto;
  `}
`;

const TestimonialsSectionContainerText = styled.div`
  ${({ theme }) => css`
    text-align: left;
    width: 100%;
    margin-top: 10rem;

    p {
      font-size: ${theme.font.small};
      color: ${theme.colors.text_primary};
      text-transform: capitalize;
      margin-bottom: 2rem;
      font-weight: 600;
    }

    h2 {
      width: 63.2rem;
      letter-spacing: 0.05em;
      font-weight: 600;
      font-size: ${theme.font.medium};
      color: ${theme.colors.text_primary};
      text-transform: capitalize;
      margin-bottom: 5.5rem;
    }
  `}
`;

const TestimonialsSectionContainerGrid = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 1.6rem;
    align-items: center;
    margin-bottom: 8.4rem;
  `}
`;

const ItemGrid = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 59.5rem;
    position: relative;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    border-radius: 0.5rem;
    overflow: hidden;
    text-align: left;

    img {
      width: 100%;
      height: 39.3rem;
      object-fit: cover;
    }
  `}
`;

const ContentGrid = styled.div`
  ${({ theme }) => css`
    padding: 2.1rem 2.4rem;
    background-color: #f1fafc;

    h2 {
      font-weight: 700;
      font-size: ${theme.font.small};
      color: ${theme.colors.text_primary};
      margin-bottom: 0.9rem;
    }

    p {
      font-weight: 500;
      font-size: ${theme.font.small};
      color: ${theme.colors.text_primary};
    }
  `}
`;

export {
  TestimonialsSection,
  TestimonialsSectionContainerText,
  TestimonialsSectionContainerGrid,
  ItemGrid,
  ContentGrid,
};
