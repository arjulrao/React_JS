import React, { useState } from 'react'

const State = () => {

    const [val, setVal] = useState(true)
     

    return (
        <div className='m-5'>
            <h1>
                {val ? 'Bahar jao' : "Bahar Mat Jao"}
            </h1>   

        <button onClick={()=> {setVal(()=> !val)}} className = "bg-blue-500 py-2 px-2 text-white rounded-xl" type="button">Change</button>

        </div>
    )
}

export default State
