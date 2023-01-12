import s from "./client.module.sass"

const Client = ({image, title}) => {


    return (
        <div className={s.client}>
            <img className={s.client__image} src={image}/>
            <div className={s.client__title}>{title}</div>
        </div>
    )
}

export default Client
