import UseForecaste from "./hooks/useForecaste";
import Search from "./components/search";
import Forecast from "./components/forecast";
import { ChangeEvent } from "react";

const App = (): JSX.Element => {
  const {
    options,
    term,
    onInputChange,
    forCaste,
    onOptionSelect,
    onSubmit,
    unit,
    setUnit,
  } = UseForecaste();

  const handleUnitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUnit(e.target.value);
  };

  return (
    <>
      <div className="flex justify-center items-center bg-gradient-to-br from-sky-200 via-rose-200 to-lime-300 h-[100vh] w-50%">
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
          unit={unit}
          onUnitChange={handleUnitChange}
        />

        {/* Placeholder when forCaste is null */}
        {forCaste ? (
          <Forecast data={forCaste} unit={unit} />
        ) : (
          <div className="text-white text-xl mt-4">
          <span className="text-black font-semibold ">  Please search for a city to get the forecast.</span>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
