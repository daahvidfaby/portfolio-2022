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
  const [offset, setOffset] = useState(0);
  const [orientationPosition, setOrientationPosition] = useState({transform: 'unset'});
  const darkModeSection = useRef(null);
  const [showCta, setShowCta] = useState(true);
  const stickyCtaSection = useRef(null);
  const requestRef = useRef();
  const offsetRef = useRef(0);


  const handleSectionChange = () => {
    if(darkModeSection.current.getBoundingClientRect().top < 200 && darkModeSection.current.getBoundingClientRect().bottom > 100) {
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
  const updateRate = 1;
  const limit = 20;
  const stopAnimationsAfterOffset = 50;
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
        setOffset(window.scrollY / 10);

        if(offsetRef.current < stopAnimationsAfterOffset) {
          requestAnimationFrame(() => {
            if (updateNow()) {
              document.documentElement.style.setProperty('--offset', window.scrollY / 10 + "%");
              document.documentElement.style.setProperty('--size', window.scrollY / 5 + "px");
            }
          });
  
          requestRef.current = requestAnimationFrame(handleSectionChange);
          return () => cancelAnimationFrame(requestRef.current);
        }

        if(stickyCtaSection.current.getBoundingClientRect().bottom >= window.innerHeight) {
          setShowCta(true);
        } else {
          setShowCta(false);
        }
        
      })

      window.addEventListener('mousemove', function(event) {
        if(offsetRef.current < stopAnimationsAfterOffset) {
          let position = Math.round(event.screenX - (document.body.clientWidth / 2));
          position = position / -200;
          setOrientationPosition(position);
        }
      })

    if (window.DeviceOrientationEvent && ('ontouchstart' in document.documentElement && navigator.userAgent.match(/Mobi/))) {
      if(offsetRef.current < stopAnimationsAfterOffset) {
        window.addEventListener('deviceorientation', handleDeviceOrientation, false);
      }
    }
  }, [])

  
  return (
    <div className={"page-container " + (darkMode === true ? 'dark-mode':'')}>
      <Header />

      <div ref={stickyCtaSection}>
        <Hero position={orientationPosition} />
        <Introduction intro={parse(content.intro)} />

        <div ref={darkModeSection}>
          <Consulting 
            title={parse(content.consulting.title)} 
            text={parse(content.consulting.text)}
            skills={content.skills}
          />
        </div>

        <Typology title={parse(content.typology.title)} text={parse(content.typology.text)} />

        <Contact id="contact" title={parse(content.contact.title)} fields={content.contact.fields} cta={content.contact.cta}/>


        <div className={'animated-cta-container ' + (offset > 60 && showCta ? 'show' : '')}>
          <a className={'button animated-cta'} href="#contact">
            Contactez-moi !
          </a>
        </div>
        
      </div>

      <Footer legals={content.footer.legals}/>

    </div>
    
  )
}

export default App
