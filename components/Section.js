import Item from "./Item"
const Section = ({details, handleClickSelectedItem}) => {
    const {label, description, items, disabledReason, disabled} = details;
    return (
        // @Note: I disabled all pointer events to the whole section if it is set to disabled=true
        <section className={`${disabled && "opacity-50 cursor-not-allowed pointer-events-none"}  mb-5`}>
            <h1 className="font-bodoni mb-5 text-2xl leading-[1.2em] tracking-[.18em]">{label}</h1>
            {disabled ? 
                <span className="text-primary text-body">{disabledReason}</span> : 
                <span className="text-body">{description}</span> 
            }
            <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                { items.map((item) => <Item key={item.id} details={item} handleClickSelectedItem={handleClickSelectedItem}/>) }
            </div>
        </section>
    )
}

export default Section; 