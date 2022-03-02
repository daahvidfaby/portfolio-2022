function Header({onLanguageChange, currentLanguage}) {
    return (
        <div className="container">
            <header className="header">
                <div className="logo">
                    David Faby
                </div>

                <nav className="localization-nav">
                    <ul className="localization-nav__list">
                        <li className="localization-nav__list__item"> 
                            <span onClick={() => onLanguageChange('fr')} className={"localization-nav__list__link " + (currentLanguage === 'fr' ? "localization-nav__list__link--active" : "")}>FR</span>
                        </li>
                        <li className="localization-nav__list__item"> 
                            <span onClick={() => onLanguageChange('en')} className={"localization-nav__list__link " + (currentLanguage === 'en' ? "localization-nav__list__link--active" : "")}>EN</span>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header