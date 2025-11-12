import React from 'react'

const Card = ({values, handleFavorites, cardIndex}) => {
    const {img, song, artist, added} = values;
  return (
    <div className='w-70 bg-zinc-100 p-4 pb-10 rounded-md flex gap-4 relative mt-10'>
        <div className='w-25 h-25 bg-orange-600 rounded-md overflow-hidden'>
            <img className='min-h-25 min-w-25  object-cover' src={img} alt="Song Image" />
        </div>
        <div>
            <h3 className='text-xl font-semibold leading-none'>{song}</h3>
            <h6 className='text-sm'>{artist}</h6>
        </div>
       <button onClick={() => handleFavorites(cardIndex)} className={`absolute px-4 py-3 text-xs text-white ${added === true ? "bg-teal-600" : "bg-orange-600"} rounded-full bottom-0 left-1/2 -translate-x-[50%] translate-y-[5px] cursor-pointer`}>{added === true ? "Remove Favorites" : "Add to Favorites"}</button>
    </div>
  )
}

export default Card;
