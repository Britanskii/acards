import s from "./buy.module.sass"
import products from "../../data/products";
import Card from "./card/Card";

const Buy = () => {

    return (
        <div className={s.buy}>
            {products.map(({title, subtitle, image}) =>
                <Card title={title} subtitle={subtitle} image={image}/>
            )}
        </div>
    )
}

export default Buy
