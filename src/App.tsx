import { Button } from './components/Button';
import { SectionAboutUs } from './components/SectionAboutUs';
import { SectionInitial } from './components/SectionInitial';
import { SectionOurDoctors } from './components/SectionOurDoctors';
import { SectionOurServices } from './components/SectionOurServices';
import { TestimonialsSection } from './components/TestimonialsSection';
import * as s from './styles';

function App() {
  return (
    <s.MainContainer>
      <SectionInitial />
      <SectionOurServices />
      <SectionAboutUs />
      <SectionOurDoctors />
      <TestimonialsSection />

      <s.SectionFinally>
        <h2>Let's consult your health with our doctor</h2>

        <div>
          <p>we will provide the best service.</p>

          <Button title="Contact us" typeButton="normal" />
        </div>
      </s.SectionFinally>
    </s.MainContainer>
  );
}

export default App;
