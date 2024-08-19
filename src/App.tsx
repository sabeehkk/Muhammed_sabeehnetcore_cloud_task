import { ChangeEvent, useState } from "react"
import { optionType } from "./types/type"
const App = ():JSX.Element => {
    const [term,setTerm]=useState<string>('')
    const [options,setOptions]=useState<[]>([])
    console.log(options,'ssssssssssssssss');
    
    let api_key= '56f54a7afc223c83f785e49750741896'
    const getSearchOptions =(value:string)=>{
    fetch(
      // `https://api.openweathermap.org/data/2.5/weather?q=${value}&units=Metric&appid=${api_key}`
       `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${api_key}`
       ).then((response)=>response.json()).then((data)=>setOptions(data)
       )
    }

    const onInputChange =(e:ChangeEvent<HTMLInputElement>)=>{
      const {value} = e.target
      setTerm(value)
      if(value ===''){
        return
      }
      getSearchOptions(value)        
    }

    const onOptionSelect=(option:optionType)=>{

    }
  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      Hello world
     <section>
     <div className="relative">
     <input type="text" value={term} onChange={onInputChange} className="px-2 py-1 rounded border-2 gap-6 border-white"/>
    <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
    {options.map((option : {name:optionType },index:Number)=>(
        
          <li key={option.name + '-' + index}>
            <button  onClick={()=>onOptionSelect(option)} className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer">{option.name}</button>
            </li>
     ))}
    </ul>
     <button className="bg-yellow-400 px-2 py-1 ">click</button>
     </div>
     </section>
    </main>
  )
}

export default App
