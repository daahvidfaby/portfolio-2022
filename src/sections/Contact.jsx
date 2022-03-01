import {useState} from 'react'

function Contact({title, fields, cta, id}) {

    const baseApiUrl = 'https://aqueous-river-46122.herokuapp.com/'; 

    const [isLoading, setIsLoading] = useState(null);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
              break;
            case 'email':
                setEmail(e.target.value);
              break;
            case 'phone':
                setPhone(e.target.value);
              break;
            case 'message':
                setMessage(e.target.value);
              break;
            default:
              return false;
          }
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        setIsLoading(true);
    
        const payload =  {
          'name': name,
          'email': email,
          'phone': phone,
          'message': message
        };
    
        fetch(baseApiUrl + 'mail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }).then((result) => {
          return result.json();
        }).then((json) => {
            setIsLoading(false);
        });
      }

    return (
        <div className="container container--small container--spaced" id={id}>
            <section className="contact">
                <h2 className="title title--large">{title}</h2>

                {isLoading? 'is loading...':''}

                <form action="#" className="contact__form" onSubmit={handleSubmit}>

                    <div className="input-md-half">
                        <label htmlFor="name" className="contact__label">{fields.name}</label>
                        <input type="text" name="name" id="name"  className="contact__input" value={name} onChange={handleInputChange}/>
                    </div>
                   

                    <div className="input-md-half">
                        <label htmlFor="email" className="contact__label">{fields.email}</label>
                        <input type="email" name="email" id="email"  className="contact__input" value={email} onChange={handleInputChange}/>
                    </div>
                    


                    <div className="input-md-half">
                        <label htmlFor="phone" className="contact__label">{fields.phone}</label>
                        <input type="phone" name="phone" id="phone"  className="contact__input" value={phone} onChange={handleInputChange}/>
                    </div>
                    
                    <div className="input-md-full">
                        <label htmlFor="message" className="contact__label">{fields.message}</label>
                        <textarea name="message"  className="contact__input contact__input--textarea" value={message} onChange={handleInputChange}/>
                    </div>

                    <div className="contact__button-container">
                        <input type="submit" className="contact__button button" value={cta}/>
                    </div>

                </form>
            </section>
        </div>
    )
}

export default Contact