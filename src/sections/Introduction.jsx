import parse from 'html-react-parser';

function Introduction({intro}) {
    return (
      <div className="container">
        <section className="introduction">
          <p>{intro}</p>
        </section>
      </div>
    )
}

export default Introduction