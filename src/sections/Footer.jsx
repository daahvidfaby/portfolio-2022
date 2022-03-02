function Footer({legals, linkToCV }) {
    return (
        <footer className="footer">

            <div className="container">

                <div className="footer__content">
                    <div className="footer__contact">
                        <a href="mailto:contact@davidfaby.fr" className="footer__contact__link">contact@davidfaby.fr</a>
                    </div>

                    <ul className="footer__links">
                        {/*<li><a href="#" className="footer__link">{legals}</a></li>*/}
                        <li><a href="https://github.com/daahvidfaby" target="_blank" className="footer__link">Github</a></li>
                        <li><a href={linkToCV} className="footer__link" target="_blank" >CV</a></li>
                    </ul>
                </div>

            </div>
      </footer>
    )
}


export default Footer;