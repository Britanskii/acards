import s from "./clients.module.sass"
import Client from "./client/Client";

import musk from "../../images/clients/musk.jpg"
import trump from "../../images/clients/trump.jpg"
import mark from "../../images/clients/mark.jpg"
import durov from "../../images/clients/durov.jpg"
import gates from "../../images/clients/gates.jpg"
import LineText from "../../modules/lineText/LineText";

const clients = [
    {image: musk, title: "Илон Маск"},
    {image: trump, title: "Дональд Трамп"},
    {image: mark, title: "Марк Цукерберг"},
    {image: durov, title: "Павел Дуров"},
    {image: gates, title: "Билл Гейтс"}
]

const Clients = () => {


    return (
        <a name="clients" className={s.clients}>
            <div className={s.clients__title}><LineText>Наши клиенты</LineText></div>
            <div className={s.clients__items}>
                {clients.map(({image, title}) =>
                    <Client image={image} title={title}/>
                )}
            </div>
        </a>
    )
}

export default Clients
