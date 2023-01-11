import "./App.sass"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Header from "./components/header/Header";
import Slider from "./components/slider/Slider";
import Wrapper from "./components/wrapper/Wrapper";
import Buy from "./components/buy/Buy";

const App = () => {
    return (
        <Wrapper>
            <Header/>
            <Slider/>
            <Buy/>
        </Wrapper>
    )
}

export default App
