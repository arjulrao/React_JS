import React from 'react'


const Card = () => {
  const product = [
    { 
      image: `https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Amazon Basics",
      description: 'adipisicing elit. Neque excepturi dignissimos nobis?',
      instock: true
    },
    {
      image: `https://images.unsplash.com/photo-1615725802642-936d9aade2ba?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Apple Store",
      description: 'Lorem ipsum dolor sit amet consectetur.',
      instock: false
    },
    {
      image: `https://images.unsplash.com/photo-1725085662412-14bd6f48a76b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
      name: "Samsung Store",
      description: 'Lorem ipsum dolor t. Neque excepturi dignissimos nobis',
      instock: true
    }
  ]

  return (
    <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-10'>
      {
        product.map((elem, index) => (
          <div key={index} className='w-52 bg-zinc-100  rounded-md overflow-hidden'>
            <div className='w-full h-32 bg-zinc-300'>
              <img className='w-full h-full object-cover' src= {elem.image} alt="" />
            </div>
            <div className='w-full px-3 py-4'>
              <h2 className='font-semibold'> {elem.name} </h2>
              <p className='text-xs mt-5'> {elem.description}</p>
              <button className={`px-4 py-1 ${elem.instock ? "bg-blue-600" : "bg-red-600 "} text-xs rounded text-zinc-100 mt-3`} >{elem.instock ? "In Stock" : "Out Of Stock"}</button>
            </div>
          </div>
        ))  
      }
    </div>
  )
}

export default Card
