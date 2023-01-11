import s from './item.module.sass'

const Item = ({image, title, subtitle}) => {


    return (
        <div className={s.item}>
            <div className={s.item__gradient}/>
            <div className={s.item__information}>
                <div className={s.item__title}>
                    Колода карт - <span className={s.item__accent}>{title}</span>
                </div>
                <div className={s.item__subtitle}>
                    {subtitle}
                </div>
                <button className={s.item__button}>
                    Купить
                </button>
            </div>
            <img className={s.item__image} src={image}/>
        </div>
    )
}

export default Item
