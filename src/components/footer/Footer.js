import s from "./footer.module.sass";
import logo from "../../images/spades.svg";

const Footer = () => {


    return (
        <footer className={s.footer}>
            <hr/>
            <div className={s.footer__content}>
                <div className={s.footer__logo}>
                    <img className={s.footer__image} src={logo}/>
                    <span className={s.footer__accent}>A</span>CARDS
                </div>
                <div className={s.footer__copyright}>
                    © 2022-2023 <br/>
                    Все права защищены
                </div>
            </div>
        </footer>
    )
}

export default Footer
