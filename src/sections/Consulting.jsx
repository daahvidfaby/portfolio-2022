import parse from 'html-react-parser';
import Accordion from '../components/Accordion';

function Consulting({title, text, skills}) {
    return (
      <div className="container">
        <section className="consulting">
          <div className="consulting__content">
            <div className="consulting__content__text">
              <h2 className="title title--large">{title}</h2>
              <p>{text}</p>
            </div>
          </div>
          <div className="consulting__skills">
            {
              skills.map((skillItem, key) => {
                return (
                  <Accordion title={skillItem.title} key={key}>
                    {
                      skillItem.list.map((skill, skillkey) => {
                        return <li key={skillkey}>{skill}</li>
                      })
                    }
                  </Accordion>
                )
              })
            }
          </div>
      </section>
    </div>
    )
}

export default Consulting