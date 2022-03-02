import { useState, useEffect, useRef } from 'react';
import content_fr from './assets/content/fr.json';
import content_en from './assets/content/en.json';
import parse from 'html-react-parser';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import Consulting from './sections/Consulting';
import Typology from './sections/Typology';
import Contact from './sections/Contact';
import Header from './sections/Header';
import Footer from './sections/Footer';


function App() {

  const [content, setContent] = useState(content_fr);
  const [currentLanguage, setCurrentLanguage] = useState('fr');
  

  const [darkMode, setDarkMode] = useState(false);
  const [orientationPosition, setOrientationPosition] = useState({transform: 'unset'});
  const darkModeSection = useRef(null);
  const [showCta, setShowCta] = useState(false);
  const stickyCtaSection = useRef(null);
  const requestRef = useRef();
  const offsetRef = useRef(0);


  const changeLanguage = (languageSlug) => {
    if(languageSlug === "fr") {
      setCurrentLanguage('fr')
      setContent(content_fr)
    } else {
      setCurrentLanguage('en')
      setContent(content_en)
    }
  }


  const handleSectionChange = () => {
    if(darkModeSection.current.getBoundingClientRect().top < 200 && darkModeSection.current.getBoundingClientRect().bottom > 100) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    requestRef.current = requestAnimationFrame(handleSectionChange);
  }

  const handleHeroOrientation = (deviceGammaOrientation) => {
    requestRef.current = requestAnimationFrame(handleHeroOrientation(deviceGammaOrientation));
  }


  function updateNow() {
    return counter++ % updateRate === 0;
  };

  let counter = 0;
  const updateRate = 0.5;
  const limit = 20;
  let useAxis;


  const handleDeviceOrientation = (event) => {
    if (updateNow()) {

      if (window.matchMedia("(orientation: landscape)").matches) {
        useAxis = 'beta'
      } else {
        useAxis = 'gamma'
      }
      let position = Math.round(event[useAxis]);
      if (Math.abs(position) > limit) {
        if (position > limit) {
              position = limit;
          } else {
              position = -limit;
                  }
          }
      position = position / -10;

      setOrientationPosition(position);
      }
  }

  useEffect(
    () => {
      window.addEventListener('scroll', () => {

        offsetRef.current = window.scrollY / 10;

        if(stickyCtaSection.current.getBoundingClientRect().top <= 0 && stickyCtaSection.current.getBoundingClientRect().bottom >= 0) {
          setShowCta(true);
        } else {
          setShowCta(false);
        }

        if(stickyCtaSection.current.getBoundingClientRect().top >= 0) {
          requestAnimationFrame(() => {
              document.documentElement.style.setProperty('--offset', window.scrollY / 10 + "%");
              document.documentElement.style.setProperty('--size', window.scrollY / 5 + "px");
          });
  
          requestRef.current = requestAnimationFrame(handleSectionChange);
          return () => cancelAnimationFrame(requestRef.current);
        }
        
      });

      window.addEventListener('mousemove', function(event) {
        if(stickyCtaSection.current.getBoundingClientRect().top >= 0) {
          let position = Math.round(event.screenX - (document.body.clientWidth / 2));
          position = position / -200;
          setOrientationPosition(position);
        }
      })

    if (window.DeviceOrientationEvent && ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/))) {
      if(stickyCtaSection.current.getBoundingClientRect().top >= 0) {
        window.addEventListener('deviceorientation', handleDeviceOrientation, false);
      }
    }
  }, [])

  
  return (
    <div className={"page-container " + (darkMode === true ? 'dark-mode':'')}>
      <Header onLanguageChange={(languageSlug) => changeLanguage(languageSlug)} currentLanguage={currentLanguage}/>

      <Hero position={orientationPosition} />

      <div ref={stickyCtaSection}>
        <Introduction intro={parse(content.intro)} />

        <div ref={darkModeSection}>
          <Consulting 
            title={parse(content.consulting.title)} 
            text={parse(content.consulting.text)}
            skills={content.skills}
          />
        </div>

        <Typology title={parse(content.typology.title)} text={parse(content.typology.text)} />

        <div className={'animated-cta-container ' + (showCta ? 'show' : '')}>
          <a className={'button animated-cta'} href="#contact">
            {content.contactCta}
          </a>
        </div>
        
      </div>

      <Contact id="contact" title={parse(content.contact.title)} fields={content.contact.fields} cta={content.contact.cta} submitResult={content.contact.submitResult}/>

      <Footer legals={content.footer.legals} linkToCV={(currentLanguage === 'fr' ? 'https://drive.infomaniak.com/app/share/458034/51b75bbe-0c89-4cb4-8550-14da4da20947' : 'https://drive.infomaniak.com/app/share/458034/2e4daa96-ed11-4b52-86c2-c20608be0b4e')}/>

    </div>
    
  )
}

export default App
