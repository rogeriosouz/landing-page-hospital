import * as s from './styles';

import image1 from '../../assets/SectionsServicesImag1.png';
import image2 from '../../assets/SectionsServicesImag2.png';
import image3 from '../../assets/SectionsServicesImag3.png';

export function SectionOurServices() {
  return (
    <s.SectionOurServices>
      <s.SectionOurServicesContainerText>
        <p>Our Services</p>
        <h2>4 step easy we care your health</h2>
      </s.SectionOurServicesContainerText>

      <s.SectionOurServicesContainerGrid>
        <s.ItemGrid>
          <h2>Poly</h2>
          <p>choose what Poly to check</p>
          <img src={image1} alt="image1" />
        </s.ItemGrid>

        <s.ItemGrid>
          <h2>Date</h2>
          <p>choose what date to check</p>
          <img src={image2} alt="image2" />
        </s.ItemGrid>

        <s.ItemGrid>
          <h2>Doctor</h2>
          <p>And choose doctor to check</p>
          <img src={image3} alt="image3" />
        </s.ItemGrid>
      </s.SectionOurServicesContainerGrid>
    </s.SectionOurServices>
  );
}
