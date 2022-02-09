function Header() {
    return (
        <div className="container">
            <header className="header">
                <div className="logo">
                    David Faby
                </div>

                <nav className="localization-nav">
                    <ul className="localization-nav__list">
                        <li className="localization-nav__list__item"> 
                            <a href="#" className="localization-nav__list__link localization-nav__list__link--active">FR</a>
                        </li>
                        <li className="localization-nav__list__item"> 
                        <a href="#" className="localization-nav__list__link">EN</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header