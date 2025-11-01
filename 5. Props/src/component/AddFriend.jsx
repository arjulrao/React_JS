import React from 'react'

const AddFriend = (/* {image, name, profession} */ { values }) => {
    const addFriend = () => {alert("Do You want to add in your friend.")}

    // const {image, name, profession} = values

    return (
        <div className='w-52 bg-zinc-200 rounded-md overflow-hidden'>
            <div className='w-full bg-sky-200 h-42'>
                <img className='w-full h-full object-cover' src= {values.image} />
            </div>
            <div className='w-full p-3 flex flex-col items-center gap-[10px]'>
                <h3 className='text-center text-xl font-semibold'>{values.name}</h3>
                <h4 className='text-center text-xs'>{values.profession}</h4>
                <button onClick={addFriend} className='w-fit py-3 px-5 bg-pink-700 rounded-xl text-xs font-semibold text-[#f0f0f0] cursor-pointer'>Add Friend</button>
            </div>     
        </div>
   
  )
}

export default AddFriend;
