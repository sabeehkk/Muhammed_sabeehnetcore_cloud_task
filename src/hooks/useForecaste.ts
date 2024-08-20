import {useState,useEffect,ChangeEvent} from 'react'
import { optionType,forecastType } from '../types/type'

const UseForecaste = () => {
    const [term,setTerm]=useState<string>('')
    const [options,setOptions]=useState<[]>([])
    const [city,setCity]=useState<optionType | null>(null)
    const [forCaste,setForcast]=useState<forecastType | null>(null)
    const [unit, setUnit] = useState<string>("metric");
    let api_key= '56f54a7afc223c83f785e49750741896'

    const getSearchOptions =(value:string)=>{
      if(!value) return 
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${api_key}`
       ).then((response)=>response.json()).then((data)=>setOptions(data)
       ).catch((error)=>console.log(error))
    }

    const onInputChange =(e:ChangeEvent<HTMLInputElement>)=>{
      const {value} = e.target
      setTerm(value)
      if(value ==='') return
      getSearchOptions(value)        
    }

    const getForecast =(city : optionType)=>{
      fetch( `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=${unit}&appid=${api_key}`)
      .then((response)=>response.json()).then((data)=>{
        const forecastData = {
            ...data.city,
            list :data,
        } 
        setForcast(forecastData)
        }
      ).catch((error)=>console.log(error))
    }

    const onSubmit=()=>{
      if(!city){
        return
      }
      getForecast(city)
      localStorage.setItem('selectedCity', JSON.stringify(city));
    }

    const onOptionSelect=(option:optionType)=>{
        console.log(option.name);
        setCity(option)
        localStorage.setItem("selectedCity", JSON.stringify(option));
    }


    useEffect(() => {
      const savedCity = localStorage.getItem('selectedCity');
      if (savedCity) {
        const cityOption = JSON.parse(savedCity);
        setCity(cityOption);
        setTerm(cityOption.name);
        getForecast(cityOption);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

        useEffect(()=>{
          if(city){
            setTerm(city.name)
            setOptions([])
          }
        },[city])
     return {
        options,term,onInputChange,forCaste,onOptionSelect,onSubmit,unit, 
        setUnit,
     }
}

export default UseForecaste
