import David from '../assets/images/david.webp';

function Hero({position}) {
    return (
        <div className="container">
            <section className="hero">
                <h1 className="hero__title title">
                    <span className="hero__title__first" style={{
                        transform: "translateX(" + position * 2 + "px)"
                    }}>
                        full stack
                    </span>
                    <span className="hero__title__second" style={{
                        transform: "translateX(" + position * -4 + "px)"
                        }}>developer
                    </span>
                </h1>
                <div className="hero__picture">
                    <div className="hero__picture__circle" style={{transform: "rotateY(" + position * -1 + "deg) translateX(" + position * -1.5 + "px)"}}/>
                    <img src={David} alt="David" style={{transform: "rotateY(" + position * 2 + "deg) translateX(" + position * 2 + "px) translateY(" + position * -1 + "px)"}}/>
                </div>
            </section>
        </div>
    )
}

export default Hero