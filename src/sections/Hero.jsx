import David from '../assets/images/david.webp';

function Hero({orientationTransformProperties}) {
    return (
        <div className="container">
            <section className="hero">
                <h1 className="hero__title title">
                    <span className="hero__title__first">full stack</span> <span className="hero__title__second">developer</span>
                </h1>
                <div className="hero__picture">
                    <img src={David} alt="David" style={orientationTransformProperties}/>
                </div>
            </section>
        </div>
    )
}

export default Hero