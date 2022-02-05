const Button = ({children,value,texto,func,clase={}})=>{
    
    return(
        <button className={clase} id={texto} value={value} onClick={func}>{texto}{children}</button>
    )
}

export default Button 