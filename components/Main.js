import { useState } from "react"
import Section from "./Section"
import Modal from "./Modal"


const Main = ({sections}) => {
    const [selectedItem, setSelectedItem] = useState(null)

    const handleClickSelectedItem = (item) => {
        setSelectedItem(item);
    }
    const handleClickOutsideModal = () => {
        setSelectedItem(null)
    }

    return (
        <main className=" w-full sm:w-3/4 pt-20 sm:pt-0 ">
            {
                sections.map((section) => 
                    <Section key={section.id} 
                        details={section} 
                        handleClickSelectedItem={handleClickSelectedItem} 
                        />
                )
            }
            {selectedItem !== null &&             
                <Modal 
                    selectedItem={selectedItem} 
                    handleClickOutsideModal={handleClickOutsideModal}/>}
         </main>
    )
}

export default Main;