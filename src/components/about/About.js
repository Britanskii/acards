import s from "./about.module.sass"

import owner from "../../images/personal/owner.jpg"

const About = () => {


    return (
        <a name="about" className={s.about}>
            <hr/>
            <br/>
            <div className={s.about__content}>
                <div>
                    <img className={s.about__image} src={owner}/>
                </div>
                <div className={s.about__message}>
                    Игральные <b>карты</b>, спутники бесконечного стука вагонных колес, долгих вечерних посиделок,
                    завораживающий инструмент в умелых руках иллюзиониста, часто ассоциируются с азартными играми,
                    шулерством и загубленными судьбами, несправедливо обросли негативным шлейфом, вызывая порой
                    справедливо настороженное отношение к ним. В этом, конечно, есть доля правды, но правда и то, что
                    обыкновенный топор не перестает быть полезным инструментом в хозяйстве лишь потому, что кто-то
                    когда-то усмотрел в нем орудие убийства в не совсем адекватном состоянии.
                    Весь вопрос в том, в чьих руках они, и с какой целью? <br/> <br/>
                    Абстрагируясь от всего негатива, призываем непредвзято и по достоинству оценить предлагаемые нами
                    игральные <b>карты</b>, которые могут приносить только позитивные ощущения. Игры же не всегда бывают
                    азартными, впрочем, как и сам азарт не всегда наполнен отрицательным содержанием. Азартно
                    проигравший нажитое горе охотник за удачей ничего общего не имеет с азартным болельщиком за любимую
                    команду или спортсмена.
                    Наши <b>карты</b>, в той именно игре, на которую и задумались, претендуют на развитие интеллекта,
                    симбиоз математического мышления с яркими эстетическими и прочими позитивными ощущениями. Ведь
                    неожиданно же играть не банальными пиковой дамой и крестовым тузом, а высококачественным
                    изображением людей из собственного круга, а то и их дружескими шаржами.
                    Следует отметить, что качество исполнения самих карт призвано удовлетворить самый изысканный вкус,
                    возвышая их от вспомогательного объекта игры до самодостаточного субъекта эстетического наслаждения.
                    Дешевый или дорогой пластик, при всех преимуществах, не способны передать ощущения прикосновения к
                    благородной бумаге, которые можно испытывать разве что в библиотеке. При этом они не менее
                    долговечные.
                    <br/><br/> <i>Наслаждайся картами, наслаждайся игрой</i>.
                </div>
            </div>
            <br/>
            <hr/>
        </a>
    )
}

export default About
