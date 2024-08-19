import {useState,useEffect,ChangeEvent} from 'react'
import { optionType,forecastType } from '../types/type'
import { types } from 'util'

const UseForecaste = () => {
    const [term,setTerm]=useState<string>('')
    const [options,setOptions]=useState<[]>([])
    const [city,setCity]=useState<optionType | null>(null)
    const [forCaste,setForcast]=useState<forecastType | null>(null)
    console.log(options,'ssssssssssssssss');
    
    let api_key= '56f54a7afc223c83f785e49750741896'
    const getSearchOptions =(value:string)=>{
    fetch(
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

    const getForecast =(city : optionType)=>{
      fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${api_key}`)
      .then((response)=>response.json()).then((data)=>{
        const forecastData = {
            ...data.city,
            list :data,
        } 
        setForcast(forecastData)
        }
      )

    }

    const onSubmit=()=>{
      if(!city){
        return
      }
      getForecast(city)
    }

    const onOptionSelect=(option:optionType)=>{
        console.log(option.name);
        setCity(option)
    }
        useEffect(()=>{
          if(city){
            setTerm(city.name)
            setOptions([])
          }
        },[city])
     return {
        options,term,onInputChange,forCaste,onOptionSelect,onSubmit
     }
    
}

export default UseForecaste
