import { useState } from 'react';
import ReactScrollDetect, { DetectSection } from 'react-scroll-detect';
import content from './assets/content/fr.json';
import parse from 'html-react-parser';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import Consulting from './sections/Consulting';
import Typology from './sections/Typology';
import Contact from './sections/Contact';
import Header from './sections/Header';


function App() {

  const [currentSection, handleSectionChange] = useState(0);

  return (
    <div className={"page-container " + (currentSection === 1 ? 'dark-mode':'')}>
      <ReactScrollDetect triggerPoint='top' onChange={handleSectionChange}>
      <Header />
      <DetectSection>
        <Hero />
        <Introduction intro={parse(content.intro)} />
      </DetectSection>

      <DetectSection>
        <Consulting 
          title={parse(content.consulting.title)} 
          text={parse(content.consulting.text)}
          skills={content.skills}
        />
      </DetectSection>

      <DetectSection>
      <Typology title={parse(content.typology.title)} text={parse(content.typology.text)} />

      <Contact title={parse(content.contact.title)} fields={content.contact.fields} cta={content.contact.cta}/>

      <footer className="footer">

        <div className="container">

            <div className="footer__contact">
              <a href="mailto:contact@davidfaby.fr">contact@davidfaby.fr</a>
            </div>

            <ul className="footer__links">
              <li><a href="#">{content.footer.legals}</a></li>
              <li><a href="#">Github</a></li>
              <li><a href="#">CV</a></li>
            </ul>

        </div>
      </footer>
      </DetectSection>

      </ReactScrollDetect>
    </div>
    
  )
}

export default App
