
const Menu = ({sections, activeSectionID, handleMenuClick}) => {
    return (
        <div className="fixed sm:relative  w-auto sm:w-1/4 bg-white sm:bg-none">
            <div className="w-full flex sm:flex-col flex-row ">
                {sections.map((sec) => 
                    <div key={sec.id} 
                        className={`${activeSectionID === sec.id ? 'border-primary' : 'border-[#E5E7EB]'} flex transition-color duration-200 hover:cursor-pointer border-b-2 sm:border-l-2 sm:border-b-0 text-default hover:text-default group w-full  lg:flex items-center text-center lg:text-left p-2 text-sm font-medium focus:color-primary`} 
                        onClick={() => handleMenuClick(sec.id)}>
                        {sec.label}
                    </div>)
                }
            </div>
        </div>
    )
}

export default Menu;