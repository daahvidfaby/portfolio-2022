import { useState, useEffect, useRef } from 'react';
import content from './assets/content/fr.json';
import parse from 'html-react-parser';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import Consulting from './sections/Consulting';
import Typology from './sections/Typology';
import Contact from './sections/Contact';
import Header from './sections/Header';
import Footer from './sections/Footer';


function App() {

  const [darkMode, setDarkMode] = useState(false);
  const [heroTransformProperties, setHeroTransformProperties] = useState({transform: 'unset'});
  const darkModeSection = useRef(null);
  const requestRef = useRef();


  const handleSectionChange = () => {
    if(darkModeSection.current.getBoundingClientRect().top < 200 && darkModeSection.current.getBoundingClientRect().bottom > 0) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    requestRef.current = requestAnimationFrame(handleSectionChange);
  }

  const handleHeroOrientation = (deviceGammaOrientation) => {
    setHeroTransformProperties({
      transform: 'translateX('+ deviceGammaOrientation * 0.2 +'px)'
    })
    console.log(deviceGammaOrientation)
    requestRef.current = requestAnimationFrame(handleHeroOrientation(deviceGammaOrientation));
  }


  function updateNow() {
    return counter++ % updateRate === 0;
  };

  let counter = 0;
  const updateRate = 10;
  const limit = 45;


  useEffect(
    () => {
      window.addEventListener('scroll', () => {
        requestRef.current = requestAnimationFrame(handleSectionChange);
        return () => cancelAnimationFrame(requestRef.current);
      })

    if (window.DeviceOrientationEvent) {
      window.addEventListener('deviceorientation', function(event) {
        if (updateNow()) {
          let position = Math.round(event.gamma);
          if (Math.abs(position) > limit) {
             if (position > limit) {
                  position = limit;
              } else {
                  position = -limit;
                      }
              }
          position = position / -100;
          let style = {transform: 'translateX('+ deviceGammaOrientation * 0.2 +'px)'};
          
          }
      }, false);
    }
  }, [])

  
  return (
    <div className={"page-container " + (darkMode === true ? 'dark-mode':'')}>
      <Header />
      <Hero orientationTransformProperties={heroTransformProperties} />
      <Introduction intro={parse(content.intro)} />

      <div ref={darkModeSection}>
        <Consulting 
          title={parse(content.consulting.title)} 
          text={parse(content.consulting.text)}
          skills={content.skills}
        />
    
      </div>

      <Typology title={parse(content.typology.title)} text={parse(content.typology.text)} />

      <Contact title={parse(content.contact.title)} fields={content.contact.fields} cta={content.contact.cta}/>

      <Footer legals={content.footer.legals}/>

    </div>
    
  )
}

export default App
