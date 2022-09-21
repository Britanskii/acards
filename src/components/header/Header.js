import s from "./header.module.sass"
import LineText from "../../modules/lineText/LineText";
import logo from "../../images/spades.svg"

const Header = () => {


    return (
        <header className={s.header}>
            <div className={s.header__logo}>
                <img className={s.header__image} src={logo}/>
               <div className={s.header__accent}>A</div>CARDS
            </div>
            <div className={s.header__navigation}>
                <LineText active={true}>
                    Главная
                </LineText>
                <LineText>
                    Купить карты
                </LineText>
                <LineText>
                    О нас
                </LineText>
                <LineText>
                    Наши клиенты
                </LineText>
            </div>
        </header>
    )
}

export default Header