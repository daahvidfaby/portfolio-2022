import parse from 'html-react-parser';

function Introduction({intro}) {
    return (
      <div className="container container--small">
        <section className="introduction">
          <p>{intro}</p>
        </section>
      </div>
    )
}

export default Introduction