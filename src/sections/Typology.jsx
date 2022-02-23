import parse from 'html-react-parser';

function Typology({title, text}) {
    return (
      <div className="container">
        <section className="project-typology">
            <h2 className="title title--large">{title}</h2>
            <p>{text}</p>
        </section>
      </div>
    )
}

export default Typology