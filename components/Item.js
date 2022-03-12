import Image from "next/image"
import { Parser } from "html-to-react"

import Button from "../components/Button"

const Item = ({details}) => {
    const {label, description, imageUrl, unitPriceFractional} = details;

    return (
        
        <div className="flex flex-col hover:cursor-pointer shadow-lg">
            <div className="relative flex-shrink-0 w-full h-[290px] ">
                {imageUrl ? <Image src={imageUrl} alt={label} 
                    layout="fill" objectFit="contain" className="hover:scale-110"/>
                : <span>Image not here</span>}
            </div>
            <div className="flex-1 h-full p-3 sm:p-4 justify-between border-dashed border-red">
                <div className="product-name mb-3 text-base font-display text-default line-clamp-2">
                    {label}
                </div>
                <p className="product-description mt-1 text-sm-body text-default line-clamp-3">
                    {Parser().parse(description)}
                </p>
                <div className="product-footer flex justify-between">
                    <div className="price">${unitPriceFractional/100}</div>
                    <Button>Add</Button>
                </div>
            </div>
        </div>
    )
}

export default Item;