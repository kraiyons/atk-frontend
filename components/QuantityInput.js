import { useState } from "react";

const QuantityInput = ({max = 999}) => {
    const [count, setCount] = useState(0)

    const handleDecrement = () => {
        if(count > 1){
            setCount(count-1)
        }
    }
    const handleIncrement = () => {
        if(count < max){
            setCount(count+1)
        }
    }
    return (
        <div className="flex w-full sm:w-auto border-[1px] rounded-sm box-border bg-white hover:cursor-pointer justify-between items-center">
            <button className="px-4 py-2 outline-none" onClick={handleDecrement}>-</button>
            <div>
            <input type="number" 
                className="block w-5 sm:text-sm border-l-0 border-r-0 no-focus outline-none appearance-none" 
                min="1" value={count} />
                </div>
            <button className="px-5 outline-none"  onClick={handleIncrement}>+</button>
        </div>
    )
}

export default QuantityInput;