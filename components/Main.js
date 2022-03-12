import Section from "./Section"

const Main = ({sections}) => {
    return (
        <main className=" w-full sm:w-3/4 pt-20 sm:pt-0 ">
            {
                sections.map((section) => 
                    <Section key={section.id} details={section}/>
                )
            }
        </main>
    )
}

export default Main;