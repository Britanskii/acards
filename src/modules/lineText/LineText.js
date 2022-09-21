import s from './lineText.module.sass'

const LineText = ({children, active}) => {

    return (
        <div className={`${s.lineText} ${active ? s.lineText__active : ""}`}>
            {children}
            <div className={s.lineText__line}/>
        </div>
    )
}

export default LineText