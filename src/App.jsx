import { useState, useEffect, useRef } from 'react';
import content from './assets/content/fr.json';
import parse from 'html-react-parser';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import Consulting from './sections/Consulting';
import Typology from './sections/Typology';
import Contact from './sections/Contact';
import Header from './sections/Header';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const darkModeSection = useRef(null);

  const handleSectionChange = () => {
    if(darkModeSection.current.getBoundingClientRect().top < 30 && darkModeSection.current.getBoundingClientRect().bottom > 0) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }


  useEffect(() => {
    window.addEventListener('scroll', () => {
      handleSectionChange();
  })})

  
  return (
    <div className={"page-container " + (darkMode === true ? 'dark-mode':'')}>
      <Header />
      <Hero />
      <Introduction intro={parse(content.intro)} />

      <div ref={darkModeSection}>
        <Consulting 
          title={parse(content.consulting.title)} 
          text={parse(content.consulting.text)}
          skills={content.skills}
        />
    
        <Typology title={parse(content.typology.title)} text={parse(content.typology.text)} />
      </div>

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
    </div>
    
  )
}

export default App
