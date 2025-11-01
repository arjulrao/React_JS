import React, { useState } from "react";
import State from "./components/State";
import Card from "./components/Card";

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

/* 
  const [value, setValue] = useState({name: "Arjul Rao", isBand : false})


  return (
    <div className="p-4">
        <h1>Name : {value.name} </h1>
        <h1>isBand : {value.isBand.toString().toUpperCase()}</h1>
        <button onClick={()=> setValue({...value, isBand: !value.isBand })}  className={`px-3 py-1 ${value.isBand ? 'bg-blue-500' : 'bg-orange-500' } rounded-full`}>Change Value</button>
    </div>
  )
*/
/* 
// use state trunt chozzo ko update nhii karta hai, 
  const [val, setVal] = useState({name: "Arjul Rao", age : 24});

  return (
    <div>
      <button onClick={()=>{ 
        setVal({...val, gender: "Male"})
        // Hamana yha par console kra hai magr isma gender add nhii hua hoga q ke jab pura function run honjaige yuska bad chiza update hoti hai
        console.log(val);
        }}>Click</button>
    </div>
  )
*/
/* 
  const [val, setVal] = useState([1,2,3,4,5])

  return (
    <div className="p-4">
      {val.map(items => <h1>{items}</h1>)}
      <button
        onClick={()=>setVal(()=> {
         return val.filter((item, index) => index!=val.length-1 )
        })}
        className="px-2 py-2 text-xs text-white rounded-xl bg-blue-500" type="button">Remove Number</button>
    </div>

  ) 
*/

  // const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

/*   return (
    <div className="p-5">
      {val.map(item => <h1>{item}</h1>)}
      <button onClick={()=> {
        setVal(()=> val.filter((item, index)=> index!=2 ))
      }}
        className="px-2 py-2 text-xs text-white rounded-xl bg-blue-500" type="button">Remove 2 Number</button>
    </div>
  )
*/
/*   return (
    <div className="p-5">
      {val.map(item => <h1>{item}</h1>)}
      <button onClick={()=> {
        setVal(()=> val.filter((item )=> item%2 == 0 ))
      }}
        className="px-2 py-2 text-xs text-white rounded-xl bg-blue-500" type="button">Remove 2 Number</button>
    </div>
  ) */


/*     return (
    <div className="p-5">
      {val.map(item => <h1>{item}</h1>)}
      <button onClick={()=> {
        setVal([...val, 7])
      }}
        className="px-2 py-2 text-xs text-white rounded-xl bg-blue-500" type="button">Add Number</button>
    </div>
  )
 */
/* 
  const [val, setVal] = useState([
    {name: "Arjul", age:23}, 
    {name: "Moin", age: 20}, 
    {name: "Hamid", age: 33}
  ])

  return(
    <div className="p-5">
      {val.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <h2>{item.age}</h2>
        </div>
      ))}
      <button 
        onClick={()=>
          setVal(()=> val.map(item => item.name === "Moin" ? ({name: "Moin", age: 22}) : item))
          }
        className="px-2 py-2 text-xs text-white rounded-xl bg-blue-500" type="button">Click
      </button>
    </div>
  ) */

    return(
      <>
        {/* <State />  */}
        <Card />
      </>
    )

}

export default App;