const Button = ({texto,func})=>{
    return(
        <button value={texto} onClick={func}>{texto}</button>
    )
}

export default Button