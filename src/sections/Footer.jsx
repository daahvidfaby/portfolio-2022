function Footer({legals}) {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer__contact">
                <a href="mailto:contact@davidfaby.fr" className="footer__contact__link">contact@davidfaby.fr</a>
                </div>

                <ul className="footer__links">
                <li><a href="#" className="footer__link">{legals}</a></li>
                <li><a href="#" className="footer__link">Github</a></li>
                <li><a href="#" className="footer__link">CV</a></li>
                </ul>

            </div>
      </footer>
    )
}


export default Footer;