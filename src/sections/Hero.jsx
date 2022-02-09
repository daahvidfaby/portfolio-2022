import David from '../assets/images/david.png';

function Hero() {
    return (
        <div className="container">
            <section className="hero">
                <h1 className="hero__title">
                    <span>fullstack</span> <span>developer</span>
                </h1>
                <div className="hero__picture">
                    <img src={David} alt="David"/>
                </div>
            </section>
        </div>
    )
}

export default Hero