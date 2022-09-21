import s from "./slider.module.sass"
import SliderSlick  from "react-slick"
import Item from "./item/Item";


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
            <Item/>
            <Item/>
            <Item/>
        </SliderSlick>
    )
}

export default Slider