import parse from 'html-react-parser';

function Consulting({title, text, skills}) {
    return (
      <div className="container">
        <section className="consulting">
          <div className="consulting__content">
            <h2 className="title">{title}</h2>
            <p>{text}</p>
          </div>
          <div className="consulting__skills">
            {
              skills.map((skillItem, key) => {
                return (
                  <div className="skill" key={key}>
                    <h3>{skillItem.title}</h3>
                    <ul>
                      {
                        skillItem.list.map((skill, skillkey) => {
                          return <li key={skillkey}>{skill}</li>
                        })
                      }
                    </ul>
                  </div>
                )
              })
            }
          </div>
      </section>
    </div>
    )
}

export default Consulting