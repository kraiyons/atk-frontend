import ItemList from "./ItemList"
import SectionHeader from "./SectionHeader"

const Section = ({details, handleClickSelectedItem}) => {
    const {disabled, items, subSections} = details;
    return (
        // @Note: I disabled all pointer events to the whole section if it is set to disabled=true
        <section className={`${disabled && "opacity-50 cursor-not-allowed pointer-events-none"}  mb-5`}>
            <SectionHeader details={details} />
            <div className="grid grid-cols-2 gap-x-3 col-start-2 sm:gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                <ItemList items={items} handleClickSelectedItem={handleClickSelectedItem} />
                {subSections.length > 0 && 
                    subSections.map(sub => {
                        return (
                            <>
                                <SectionHeader details={sub} />
                                <ItemList items={sub.items} handleClickSelectedItem={handleClickSelectedItem} />
                            </>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Section; 