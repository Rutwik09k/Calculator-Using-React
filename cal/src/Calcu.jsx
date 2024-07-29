import { useState } from "react"


function Calcu() {

  const [click, setclick] = useState("")
  const show=((event)=>{
         console.log(event.target.value)
         setclick(click.concat(event.target.value))
  })

  const equal=(()=>{
    setclick(eval(click))
  })

  const clear=(()=>{
    setclick("")
  })

  const back=(()=>{
    setclick(click.slice(0,-1))
  })

  return (
      <div className=" bg-slate-500 w-96 mx-auto flex flex-col justify-center text-center mt-8 border shadow-md rounded-md">
  
       <div className="mt-3">
        <input value={click} type="" name=""  className="w-60 h-12 rounded-md border shadow-md px-2 font-semibold text-lg"/>
       </div>
       <div className='grid grid-cols-4 gap-1 mt-3 pl-4 mb-3'>
       
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value=".">.</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="/">/</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="%">%</button>
       <button type="" onClick={clear} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="AC">AC</button>
       
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="7">7</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="8">8</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="9">9</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="*">*</button>
 
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="4">4</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="5">5</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="6">6</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="-">-</button>

       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="1">1</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="2">2</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="3">3</button>
       <button type="" onClick={show} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="+">+</button>

       <button type="" onClick={equal} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="=">=</button>
       <button type="" onClick={back} className="bg-red-300 w-16 border rounded-md transform hover:scale-105 transition-transform duration-200" value="Back">Back</button>

        
       </div>
   </div>
  
  )
}

export default Calcu
