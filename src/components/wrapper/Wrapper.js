import s from "./wrapper.module.sass"

const Wrapper = ({children}) => {


    return (
        <div className={s.wrapper}>
            {children}
        </div>
    )
}


export default Wrapper
