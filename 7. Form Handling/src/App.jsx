import React, { useRef, useState } from 'react'
import { useForm } from 'react-hook-form';

const App = () => {
  
  /* Normal Form  */    
  /* 
  return (
    <div className='p-4 '>
      <form action="">
        <input className='border rounded-md p-2 m-2' type="text" placeholder='Name' />
        <button className='border rounded-md py-2 px-4 bg-blue-400 text-white' type='submit'>Submit</button>
      </form>
    </div>
  )
  */

  /* Using useRef */
/*   
  const elem = useRef(null)
  return (
    <div>
      <h1 ref={elem}>Hello</h1>
    </div>
  )
*/
/* 
const name = useRef(null)
const age = useRef(null)

const handleSubmit = (event)=> {
  event.preventDefault();      // preventDefault stop form to submit 

  console.log(name.current.value); 
  console.log(age.current.value);
}

// onSubmit = { (event) => event.preventDefault() } 
return (
  <form action="" onSubmit={handleSubmit}>
    <input ref={name} type="text" placeholder='name'/>
    <input ref={age} type="text" placeholder='age' />
    <input type="submit" />
  </form>
)
*/

/* Controlled Components */

/*
const [val, setVal] = useState({name : "", age : "", email: ""});

const handleSubmit = (event)=> {
  event.preventDefault();
  console.log(val)
}

return (
  <form action="" onSubmit={handleSubmit}>
    <input onChange={(event)=> setVal({...val, name : event.target.value})} type="text" placeholder='Name'/>
    <input onChange={(event) => setVal({...val, age : event.target.value})} type="text" placeholder= "age" />
    <input onChange={(event)=> setVal({...val, email : event.target.value})} type="email" placeholder='Email' />
    <input type="submit" />
  </form>
)
*/

/* React Hook Form */
// It is package, we have to install it React Hook Form

const {register, handleSubmit} = useForm();
//console.log(register())   // It give us onBlur, onChange, ref when we call it.


return (
  <div>
    <form action="" onSubmit={handleSubmit(data => console.log(data))}>
      <input {...register('name')} type="text" placeholder='name'/>
      <input {...register("age")} type="text" placeholder='age'/>
      <input {...register("email")} type="email" placeholder='email'/>
      <input type="submit" />
    </form>
  </div>
)

}

export default App;   