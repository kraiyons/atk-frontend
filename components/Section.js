import Item from "./Item"

const Section = ({details}) => {
    const {label, description, items, disabledReason, disabled} = details;
    return (
        <section className={`${disabled && "opacity-50 cursor-disabled pointer-events-none"}`}>
            <h1 className="font-bodoni text-2xl leading-[1.2em] tracking-[.18em]">{label}</h1>
            {disabled ? 
                <span className="color-primary">{disabledReason}</span> : 
                <span>{description}</span> 
            }
            <div className="grid grid-cols-2 gap-x-3 sm:gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                { items.map((item) => <Item key={item.id} details={item}/>) }
            </div>
        </section>
    )
}

export default Section; 