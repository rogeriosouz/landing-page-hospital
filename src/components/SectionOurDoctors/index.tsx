import * as s from './styles';

import {
  FacebookLogo,
  InstagramLogo,
  PinterestLogo,
} from '@phosphor-icons/react';
import doctor1 from '../../assets/doctor1.png';
import doctor2 from '../../assets/doctor2.png';
import doctor3 from '../../assets/doctor3.png';
import doctor4 from '../../assets/doctor4.png';

export function SectionOurDoctors() {
  return (
    <s.SectionOurDoctors>
      <s.SectionOurDoctorsContainerText>
        <p>Our Doctors</p>
        <h2>visit our professional specialists</h2>
      </s.SectionOurDoctorsContainerText>

      <s.SectionOurDoctorsContainerGrid>
        <s.ItemGrid>
          <img src={doctor1} alt="image1" />

          <s.ContentGrid>
            <s.FlexIcons>
              <FacebookLogo size={16} color="#000" weight="bold" />
              <PinterestLogo size={16} color="#000" weight="bold" />
              <InstagramLogo size={16} color="#000" weight="bold" />
            </s.FlexIcons>
            <h3>dr. Moeharman, Sp. THT.KL</h3>
            <p>Orthodontist</p>
          </s.ContentGrid>
        </s.ItemGrid>

        <s.ItemGrid>
          <img src={doctor2} alt="image1" />

          <s.ContentGrid>
            <s.FlexIcons>
              <FacebookLogo size={16} color="#000" weight="bold" />
              <PinterestLogo size={16} color="#000" weight="bold" />
              <InstagramLogo size={16} color="#000" weight="bold" />
            </s.FlexIcons>
            <h3>ANTONIUS JANSEN</h3>
            <p>Pediatric</p>
          </s.ContentGrid>
        </s.ItemGrid>

        <s.ItemGrid>
          <img src={doctor3} alt="image1" />

          <s.ContentGrid>
            <s.FlexIcons>
              <FacebookLogo size={16} color="#000" weight="bold" />
              <PinterestLogo size={16} color="#000" weight="bold" />
              <InstagramLogo size={16} color="#000" weight="bold" />
            </s.FlexIcons>
            <h3>dr. NADYA NAVIRA</h3>
            <p>Dentist</p>
          </s.ContentGrid>
        </s.ItemGrid>

        <s.ItemGrid>
          <img src={doctor4} alt="image1" />

          <s.ContentGrid>
            <s.FlexIcons>
              <FacebookLogo size={16} color="#000" weight="bold" />
              <PinterestLogo size={16} color="#000" weight="bold" />
              <InstagramLogo size={16} color="#000" weight="bold" />
            </s.FlexIcons>
            <h3>dr. Moeharman, Sp. THT.KL</h3>
            <p>Orthodontist</p>
          </s.ContentGrid>
        </s.ItemGrid>
      </s.SectionOurDoctorsContainerGrid>
    </s.SectionOurDoctors>
  );
}
