import sectionAboutImage from '../../assets/sectionAboutImage.png';
import { Button } from '../Button';
import * as s from './styles';

export function SectionAboutUs() {
  return (
    <s.SectionAboutUs>
      <img src={sectionAboutImage} alt="image-Section-Initial" />

      <s.SectionAboutUsContainerText>
        <span>About Us</span>
        <h2>we help your health</h2>

        <p>
          This profile describes the activities of health services and medical
          support as well as the facilities and conditions of the General
          Hospital which is reflected in the general public served from all
          groups, religions and beliefs, ethnicity and the level and frequency
          of bed occupancy which continues to increase significantly.
        </p>

        <Button title="more about us" typeButton="normal" />
      </s.SectionAboutUsContainerText>
    </s.SectionAboutUs>
  );
}
