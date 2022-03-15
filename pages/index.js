import { useState, useEffect, createRef } from 'react';

import Menu from  '../components/Menu'
import Main from  '../components/Main'


export default function Home({menu}) {
  const [activeSectionID, setActiveSectionID] = useState(null);
  useEffect(() => {
    setActiveSectionID(menu[0].id)
  }, [menu])

  /**
   * @param {number} id Id of the selected/clicked section
   */
  const handleMenuClick = (id,ref) => {
    setActiveSectionID(id)
    ref.current.scrollIntoView();
  }

  return (
    <div className="relative max-w-screen-xl mx-auto flex flex-col justify-end sm:flex-row py-5 px-5">
      <Menu sections={menu} activeSectionID={activeSectionID} handleMenuClick={handleMenuClick}/>
      <Main sections={menu}/>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://atlas-fe-menu.atlas-kitchen.workers.dev/menu`)
  const json = await res.json()

  const menu = json.sections.map((sec) => {
    sec["ref"] = createRef()
    if(sec.subSections.length > 0){
      sec.subSections = sec.subSections.map((sub) => {
        sub["ref"] = createRef();
        return sub;
      })
    }
    return sec
  })
  // Pass data to the page via props
  return { props: { menu } }
}
