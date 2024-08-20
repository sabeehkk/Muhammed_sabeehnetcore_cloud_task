import { ChangeEvent } from 'react'

interface UnitSelectorProps {
  unit: string
  onUnitChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const UnitSelector = ({
  unit,
  onUnitChange,
}: UnitSelectorProps): JSX.Element => {
  return (
    <>
      <div className="flex items-center mt-4">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            value="metric"
            checked={unit === 'metric'}
            onChange={onUnitChange}
            className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out border-gray-300 focus:ring-blue-500"
          />
          <span className="ml-2 text-gray-700">Metric</span>
        </label>
        <label className="flex items-center cursor-pointer ml-4">
          <input
            type="radio"
            value="imperial"
            checked={unit === 'imperial'}
            onChange={onUnitChange}
            className="form-radio h-5 w-5 text-blue-600 transition duration-150 ease-in-out border-gray-300 focus:ring-blue-500"
          />
          <span className="ml-2 text-gray-700">Imperial</span>
        </label>
      </div>
    </>
  )
}

export default UnitSelector
