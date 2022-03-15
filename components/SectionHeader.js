const SectionHeader = ({details}) => {
    const { label,description, disabledReason, disabled, ref} = details
    return (
        <div className="col-span-3" ref={ref}>
         <h1 className="font-bodoni mb-5 text-2xl leading-[1.2em] tracking-[.18em]">{label}</h1>
            {disabled ? 
                <span className="text-primary text-body">{disabledReason}</span> : 
                <span className="text-body">{description}</span> 
            }
        </div>
    )

}

export default SectionHeader