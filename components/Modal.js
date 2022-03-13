import Image from "next/image"
import { Parser } from "html-to-react"

import QuantityInput from "./QuantityInput"
import Button from "./Button"

const Modal = ({selectedItem, handleClickOutsideModal}) => {
    if(selectedItem === null) return;
    const { label, description, currency, unitPriceFractional, imageUrl, itemStock } = selectedItem;
    return (
        // 
        <div className={`fixed h-screen w-screen top-0 left-0 flex items-center justify-center bg-black/50`}
            onClick={() => handleClickOutsideModal()}
        >
            <div
                className="relative sm:w-full sm:h-full w-1/2 h-5/6" 
                onClick={e => e.stopPropagation()}>
                <div className="relative w-full h-full flex flex-row bg-white">
                    <div className="relative h-full w-[700px]">
                        <Image src={imageUrl} layout="fill" objectFit="cover"  alt=""/>
                    </div>
                    <div className="flex flex-col justify-between pt-12 w-1/2 h-full">
                        <div className="p-6 ">
                            <h1 className="text-2xl mb-3 font-bodoni">{label}</h1>
                            <div>{Parser().parse(description)}</div>
                        </div>
                        <div className="flex mt-3 space-x-3 bg-customgray p-6 justify-between ">
                            <QuantityInput className="quantity-control flex w-full sm:w-auto" max={itemStock.quantityLeft}/>
                            <Button className="inline-flex items-center justify-center font-semibold break-keep shadow-sm border focus:outline-none rounded-sm border-button-primary text-on-primary bg-primary hover:bg-primary-dark px-4 py-2 text-sm w-full ">Add ({currency +" "+ (unitPriceFractional/100)})</Button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Modal;