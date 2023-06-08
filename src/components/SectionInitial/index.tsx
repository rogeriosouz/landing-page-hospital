import imageSectionInitial from '../../assets/ImageSectionInitial.png';
import { Button } from '../Button';
import * as s from './styles';

export function SectionInitial() {
  return (
    <s.SectionInitial>
      <s.SectionInitialContainerText>
        <h1>we care about your health</h1>
        <p>
          check now your healty with our profesional doctor, completed and
          modern fasilities services
        </p>

        <Button title="Check Now" typeButton="normal" />
      </s.SectionInitialContainerText>

      <img src={imageSectionInitial} alt="image-Section-Initial" />
    </s.SectionInitial>
  );
}
