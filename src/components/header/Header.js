import s from "./header.module.sass"
import LineText from "../../modules/lineText/LineText";
import logo from "../../images/spades.svg"

const links = [
    {text: "Главная", link: "general"},
    {text: "Купить карты", link: "buy"},
    {text: "О нас", link: "about"},
    {text: "Наши клиенты", link: "clients"},
]

const Header = () => {


    return (
        <a name="general">
            <header className={s.header}>
                <div className={s.header__logo}>
                    <img className={s.header__image} src={logo}/>
                    <span className={s.header__accent}>A</span>CARDS
                </div>
                <div className={s.header__navigation}>
                    {links.map(({text, link}, index) =>
                        <LineText active={index === 0}>
                            <a className={s.header__link} href={`#${link}`}>{text}</a>
                        </LineText>
                    )}
                </div>
            </header>
        </a>
    )
}

export default Header
