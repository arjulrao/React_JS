import React from 'react'

/* function Card(props) {
    return (
        <button className='px-5 py-2 bg-blue-500 text-zinc-200 text-xs rounded m-2'>{props.text}</button>
    )
} */

function Card({text, color, textcolor}) {
    return (
        <button className= {`px-5 py-2 ${color} ${textcolor} text-s rounded m-2 cursor-pointer`}>{text}</button>
    )
}

export default Card;
