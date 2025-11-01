import React from 'react';
import Card from './component/Card'
import AddFriend from './component/AddFriend'

const App = () => {
  // return (
  //   <>
  //     <Card text = "Know More" color= "bg-blue-500" textcolor = "text-[#fff]"/>
  //     <Card text = "Download" color= "bg-red-500" textcolor = "text-[#000]"/>
  //   </>
  // )


  const data = [
    {name : "John", profession : "Banker", image : "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"},
    {name : "Vikram", profession : "Farmer", image : "https://plus.unsplash.com/premium_photo-1678344177250-bfdbed89fc03?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"},
    {name : "Teena", profession : "HR", image : "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688"},
    {name : "Sadab", profession : "Web Developer", image : "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"},
  ]

  return (
    <>
      <div className='w-full h-screen bg-pink-200 flex items-center justify-center gap-2'>
        {/* {data.map((item, index) => (
          <AddFriend image = {item.image} name = {item.name} profession = {item.profession} />
        )  
        )} */}
           {data.map((item, index) => (
          <AddFriend values = { item } />
        )  
        )}
      </div>  
    </>
  )
}

export default App;
