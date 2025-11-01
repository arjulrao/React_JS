import React, { useState } from 'react'
import { FaArrowRight } from "react-icons/fa";   //Install- npm react-icons

const Card = () => {

    const [val, setVal] = useState(false)

  return (
    <div className='w-full h-screen bg-red-300 flex justify-center items-center'>
        <div className='w-100 h-75 bg-red-400 rounded-xl overflow-hidden relative flex'>
            <img className= {`shrink-0 h-full w-full object-cover transition-transform duration-700 ease-in-out ${val === false ? "-translate-x-[0%]" : "-translate-x-[100%]"}`} src="https://images.unsplash.com/photo-1759238274106-b5cb49c6ddc5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <img className={`shrink-0 h-full w-full object-cover transition-transform duration-700 ease-in-out ${val === true ? "-translate-x-[100%]" : "-translate-x-[0%]"}`} src="https://images.unsplash.com/photo-1693765412026-5ac076db4136?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
           
            <span onClick={()=> setVal(()=> !val)} className='h-10 w-10 flex items-center justify-center rounded-full bg-[#dadada7b] absolute bottom-[-5%] left-50 -translate-y-[50%] -translate-x-[50%]'>
                <FaArrowRight size={".7em"}/>
            </span>
            
        </div>
    </div>
  )
}

export default Card;
