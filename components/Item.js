import Image from "next/image"
import { Parser } from "html-to-react"

import Button from "../components/Button"
import NotFoundSvg from "../public/not-found.svg"

const Item = ({details, handleClickSelectedItem, hero = false}) => {
    const {label, description, imageUrl, unitPriceFractional, itemStock} = details;
    const outOfStock = itemStock.quantityLeft === 0;

    return (
        imageUrl && 
        <div 
            className={`${hero && "col-span-3"} flex h-full flex-col hover:cursor-pointer shadow-lg rounded-lg`} 
            onClick={() => !outOfStock && handleClickSelectedItem(details)}>
            <div className="relative flex-shrink-0 w-full h-[290px]">
                {<Image src={imageUrl || NotFoundSvg} alt={label} 
                    layout="fill" objectFit="contain" className="hover:scale-110 transition-transform duration-200"/>
                }
            </div>
            <div className="flex flex-col h-full p-3 sm:p-4 justify-between border-dashed border-red">
                <div className="flex flex-col">
                    <div className="product-name mb-4 font-bodoni text-base font-display line-clamp-2">
                        {label}
                    </div>
                    <p className="product-description text-sm-body text-default line-clamp-3 text-body">
                        {Parser().parse(description)}
                    </p>
                </div>
                <div className="product-footer mt-3 flex justify-between items-center">
                    <div className="price">${unitPriceFractional/100}</div>
                    <Button disabled={outOfStock}>{outOfStock ? "Sold Out" : "Add"}</Button>
                </div>
            </div>
        </div>
    )
}

export default Item;