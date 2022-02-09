function Contact({title, fields, cta}) {
    return (
        <div className="container">
            <section className="contact">
                <h2 className="title">{title}</h2>

                <form action="#">

                    <label htmlFor="name">{fields.name}</label>
                    <input type="text" name="name" id="name"/>

                    <label htmlFor="email">{fields.email}</label>
                    <input type="email" name="email" id="email"/>

                    <label htmlFor="phone">{fields.phone}</label>
                    <input type="phone" name="phone" id="phone"/>

                    <label htmlFor="message">{fields.message}</label>
                    <textarea name="message"/>

                    <input type="submit" value={cta} />

                </form>
            </section>
        </div>
    )
}

export default Contact