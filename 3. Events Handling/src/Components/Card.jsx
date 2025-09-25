import React from 'react'

const Card = () => {

    const songInfo = [
        {
            name: "Bulleya",
            description: "Ae Dil Hai Mushkil  Karan Johar  Aishwarya, Ranbir, Anushka  Pritam  Amit Mishra"
        },
        {
            name : 'Koy ki itna payer',
            description: "Koy ki itna payer Udit Narayan, Alka"
        },
        {
            name: "Yeh Dil Deewana",
            description: "Shah Rukh Khan  Sonu Nigam  Nadeem-Shravan  Pardes"      
        }
              
    ]

    const handleClickDownload = ()=> {alert("Song Download Start")} 

  return (
    <div className='w-full h-screen bg-zinc-300 flex flex-col gap-4 items-center justify-center'>
        {songInfo.map((item, index) => (
            <div key={index} className='w-80 px-3 py-2 bg-zinc-100 rounded-md'>
            <h3 className='font-semibold text-xl'>{item.name}</h3>
            <p className='text-xs mt-2'>{item.description}</p>
            <button onClick={handleClickDownload} className='px-2 py-1 bg-blue-400 text-xs font-semibold rounded text-zinc-100 mt-3'>Download</button>
            </div>
        ))}
    </div>
  )
}

export default Card
