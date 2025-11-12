import React from 'react'
import styles from "./style.module.css"

const NavBar = ({values}) => {

  return (
    <div className='w-full px-20 py-5 flex justify-between items-center'>
      <h3 className={`${styles.color} ${styles.backgroundColor} ${styles.borderRadius} ${styles.paddingAll} ${styles.fontBold}`}>Oranges</h3>
      <div className='flex py-2 px-4 bg-orange-600 text-white rounded-md text-sm gap-3'>
        <h3>Favorites</h3>
        {/* <h4>{values.filter((item)=> item.added === true ).length}</h4> */}
        <h4>{values.filter((item)=> item.added).length}</h4>
      </div>
    </div>
  )
}

export default NavBar
