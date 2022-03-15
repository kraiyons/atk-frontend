
import { useRef } from "react";


const Menu = ({sections, activeSectionID, handleMenuClick}) => {
    const menuRef = useRef();

    return (
        <div className={`fixed top-5 sm:left-[200px] w-auto sm:w-1/4 bg-none z-10`} 
            ref={menuRef}>
            <div className="w-full flex sm:flex-col flex-row ">
                {sections.map((sec) => 
                    <div key={sec.id} 
                        className={`${activeSectionID === sec.id ? 'border-primary' : 'border-[#E5E7EB]'} flex flex-col transition-color duration-200 hover:cursor-pointer border-b-2 sm:border-l-2 sm:border-b-0 text-default hover:text-default group w-full  lg:flex text-center lg:text-left p-2 text-sm font-medium focus:color-primary`} 
                        onClick={() => handleMenuClick(sec.id,sec.ref)}>
                        {sec.label}
                        {sec.subSections.length > 0 && 
                            <div>
                                {sec.subSections.map((sub) =>
                                <div className="hidden sm:block" key={sub.id} 
                                    onClick={() => handleMenuClick(sub.id,sub.ref)}>
                                    - {sub.label}
                                </div>)}
                            </div>
                        }
                    </div>)
                }
            </div>
        </div>
    )
}

export default Menu;