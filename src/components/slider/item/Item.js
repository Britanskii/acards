import s from './item.module.sass'

import product from "../../../images/products/1.jpg"

const Item = () => {


    return (
        <div className={s.item}>
            <div className={s.item__gradient}/>
            <div className={s.item__information}>
                <div className={s.item__title}>
                    Колода карт - <span className={s.item__accent}>Илон Маск</span>
                </div>
                <div className={s.item__subtitle}>
                    Выбор Илона Маска
                </div>
                <button className={s.item__button}>
                    Купить
                </button>
            </div>
            <img className={s.item__image} src={product} alt=""/>
        </div>
    )
}

export default Item