import * as s from './styles';

import imageTestimonialsSection1 from '../../assets/testimonialsImage1.png';

import imageTestimonialsSection2 from '../../assets/testimonialsImage2.png';

export function TestimonialsSection() {
  return (
    <s.TestimonialsSection>
      <s.TestimonialsSectionContainerText>
        <p>Testimonials</p>
        <h2>what they say after visiting our hospital</h2>
      </s.TestimonialsSectionContainerText>

      <s.TestimonialsSectionContainerGrid>
        <s.ItemGrid>
          <img src={imageTestimonialsSection1} alt="image1" />

          <s.ContentGrid>
            <h2>John doe</h2>
            <p>
              The service I felt was very good, the staff and doctors were
              friendly and provided very clear information.
            </p>
          </s.ContentGrid>
        </s.ItemGrid>

        <s.ItemGrid>
          <img src={imageTestimonialsSection2} alt="image1" />

          <s.ContentGrid>
            <h2>John doe</h2>
            <p>
              The service I felt was very good, the staff and doctors were
              friendly and provided very clear information.
            </p>
          </s.ContentGrid>
        </s.ItemGrid>
      </s.TestimonialsSectionContainerGrid>
    </s.TestimonialsSection>
  );
}
