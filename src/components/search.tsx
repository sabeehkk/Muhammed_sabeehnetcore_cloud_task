import { ChangeEvent } from 'react'
import { optionType } from '../types/type'
import Header from './header'
import UnitSelector from "../components/unitSelector";

type Props = {
  term: string
  options: []
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  onOptionSelect: (option: optionType) => void
  onSubmit: () => void
  unit: string;
  onUnitChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({
  term,
  options,
  onInputChange,
  onOptionSelect,
  onSubmit,
  unit,
  onUnitChange,
  
}: Props): JSX.Element => {
  return (
    <>

      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center items-center justify-center md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg text-zinc-700">
        <Header />

        <div className="relative flex mt-10 md:mt-4">
          <input
            type="text"
            value={term}
            className="px-2 py-1 rounded-l-md border-2 border-white"
            onChange={onInputChange}
          />

          <ul className="absolute top-9 bg-white ml-1 rounded-b-md">
            {options.map((option: optionType, index: Number) => (
              <li key={option.name + '-' + index}>
                <button
                  onClick={() => onOptionSelect(option)}
                  className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
                >
                  {option.name}, {option.country}{' '}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="rounded-r-md border-2 border-zinc-100 bg-gray-300 hover:bg-gray-400 hover:border-zinc-500 hover:text-zinc-100  text-zinc-800 px-2 py-1 cursor-pointer"
            onClick={onSubmit}
          >
            search
          </button>
        </div>
        <UnitSelector unit={unit} onUnitChange={onUnitChange} />


      </section>
    </>
  )
}

export default Search








