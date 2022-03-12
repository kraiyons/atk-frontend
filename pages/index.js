import Menu from  '../components/Menu'
import Main from  '../components/Main'


import { useState, useEffect } from 'react';

export default function Home({menu}) {
  const [activeSectionID, setActiveSectionID] = useState(null);

  useEffect(() => {
    // By default, set section id to the first section
    setActiveSectionID(menu.sections[0].id)
  }, [menu])

  /**
   * @param {number} id Id of the selected/clicked section
   */
  const handleMenuClick = (id) => {
    setActiveSectionID(id)
  }

  return (
    <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row py-5">
      <Menu sections={menu.sections} activeSectionID={activeSectionID} handleMenuClick={handleMenuClick}/>
      <Main sections={menu.sections}/>
    </div>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_ENDPOINT}/menu`)
  const menu = await res.json()

  // Pass data to the page via props
  return { props: { menu } }
}
