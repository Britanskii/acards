import s from "./slider.module.sass"
import SliderSlick  from "react-slick"
import Item from "./item/Item";
import products from "../../data/products";

const Slider = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <SliderSlick className={s.slider} {...settings}>
            {products.map(({title, subtitle, image}) =>
                <Item title={title} subtitle={subtitle} image={image}/>
            )}
        </SliderSlick>
    )
}

export default Slider
