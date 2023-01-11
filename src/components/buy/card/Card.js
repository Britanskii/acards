import s from "./card.module.sass"


const Card = ({title, subtitle, image}) => {

    return (
        <div className={s.card}>
            <div className={s.card__information}>
                <div className={s.card__title}>{title}</div>
                <div className={s.card__subtitle}>{subtitle}</div>
                <button className={s.card__button}>Купить</button>
            </div>
            <img className={s.card__image} src={image}/>
        </div>
    )
}

export default Card
