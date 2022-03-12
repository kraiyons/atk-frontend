const Menu = ({sections, activeSectionID, handleMenuClick}) => {
    return (
        <div className="w-full fixed sm:relative sm:w-1/4  flex flex-row sm:flex-col bg-white">
        {sections.map((sec) => 
            <div key={sec.id} 
                className={`${activeSectionID === sec.id ? 'border-primary' : 'border-[#E5E7EB]'} transition hover:cursor-pointer border-b-2 lg:border-b-0 text-default hover:text-default group w-full lg:border-l-2 lg:flex items-center text-center lg:text-left p-2 text-sm font-medium focus:color-primary`} 
                onClick={() => handleMenuClick(sec.id)}>
                {sec.label}
            </div>)
        }
        </div>
    )
}

export default Menu;