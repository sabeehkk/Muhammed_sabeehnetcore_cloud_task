import UseForecaste from "./hooks/useForecaste"
import Search from "./components/search"
import Forecast from "./components/forecast"
const App = ():JSX.Element => {
   const {
    options,term,onInputChange,forCaste,onOptionSelect,onSubmit
 } =UseForecaste()
  return (
    <>
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-lime-400 h-[100vh] w-full">
      {forCaste ? (
         <Forecast data = {forCaste}/>
      ):(
       <Search term={term}
        options={options}
        onInputChange={onInputChange}
        onOptionSelect={onOptionSelect}
        onSubmit={onSubmit}
      />
      )}
    
    </main>
         </>
  )
}

export default App
