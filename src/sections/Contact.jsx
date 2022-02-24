function Contact({title, fields, cta}) {
    return (
        <div className="container container--small">
            <section className="contact">
                <h2 className="title title--large">{title}</h2>

                <form action="#" className="contact__form">

                    <div className="input-md-half">
                        <label htmlFor="name" className="contact__label">{fields.name}</label>
                        <input type="text" name="name" id="name"  className="contact__input"/>
                    </div>
                   

                    <div className="input-md-half">
                        <label htmlFor="email" className="contact__label">{fields.email}</label>
                        <input type="email" name="email" id="email"  className="contact__input"/>
                    </div>
                    


                    <div className="input-md-half">
                        <label htmlFor="phone" className="contact__label">{fields.phone}</label>
                        <input type="phone" name="phone" id="phone"  className="contact__input"/>
                    </div>
                    
                    <div className="input-md-full">
                        <label htmlFor="message" className="contact__label">{fields.message}</label>
                        <textarea name="message"  className="contact__input contact__input--textarea"/>
                    </div>

                    <div className="contact__button-container">
                        <input type="submit" className="contact__button button" value={cta} />
                    </div>

                </form>
            </section>
        </div>
    )
}

export default Contact