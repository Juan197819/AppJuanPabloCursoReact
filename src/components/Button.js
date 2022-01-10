const Button = ({texto,func,clase={}})=>{
    return(
        <button className={clase} value={texto} onClick={func}>{texto}</button>
    )
}

export default Button