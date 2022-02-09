import parse from 'html-react-parser';

function Introduction({intro}) {
    return (
      <div className="container">
        <section className="introduction">
          {intro}
        </section>
      </div>
    )
}

export default Introduction