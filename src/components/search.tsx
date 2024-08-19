import { ChangeEvent } from "react"
import { optionType } from "../types/type"
type Props = {
    term: string,
    options:[],
    onInputChange : (e:ChangeEvent<HTMLInputElement>)=>void,
    onOptionSelect : (option: optionType)=>void,
    onSubmit : ()=>void,
}
const Search = (
        {term,
        options,
        onInputChange,
        onOptionSelect,
        onSubmit,
        }:Props):JSX.Element => {
   
  return (
    <>
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      Hello world
     <section>
     <div className="relative">
     <input type="text" value={term} onChange={onInputChange} className="px-2 py-1 rounded border-2 gap-6 border-white"/>
       <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
        {options.map((option : optionType , index:Number)=>(
          <li key={option.name + '-' + index}>
              <button  onClick={()=>onOptionSelect(option)} className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer">{option.name}</button>
           </li>  
         ))}
       </ul>
     <button className="bg-yellow-400 px-2 py-1" onClick={onSubmit}>click</button>
     </div>
     </section>
    </main>
         </>
  )
}

export default Search
 