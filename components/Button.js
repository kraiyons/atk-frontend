const Button = ({disabled, children}) =>{
    return (
        <button className={`${disabled && 'opacity-50 cursor-not-allowed'} bg-primary text-white text-sm px-4 py-2`}>
            {children}
        </button>
    )
}

export default Button;