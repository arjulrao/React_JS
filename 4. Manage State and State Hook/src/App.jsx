import React, { useState } from "react";

function App() {
  /*  const ans = useState(0)
    console.log(ans[0])
    const ans2 = useState(false);
    console.log(ans2[0])
    const ans3 = useState({name: "Arjul"});
    console.log(ans3[0])
  */
  
  // const [score, setScore] = useState(0);
/* 
  return (
    <div className="h-lvh w-full bg-black text-white flex items-center justify-center">
      <div className="p-20px border-2 rounded-sm py-20 px-20 flex flex-col gap-5">
        <h1 className="text-2xl font-bold font-serif">Score Board</h1>
        <h1 className="text-center text-lg font-semibold">Current Score : {score}</h1>
       <button onClick={()=> setScore(score + 10)} className="py-2 rounded-xl text-xs bg-blue-500 text-white">Change Score</button>
      </div>
    </div> 
  ) */


  const [value, setValue] = useState({name: "Arjul Rao", isBand : false})


  return (
    <div className="p-4">
        <h1>Name : {value.name} </h1>
        <h1>isBand : {value.isBand.toString()}</h1>
        <button onClick={()=> setValue({...value, isBand: !value.isBand })}  className="px-3 py-1 bg-blue-500 rounded-full">Change Value</button>
    </div>
  )

}


export default App;