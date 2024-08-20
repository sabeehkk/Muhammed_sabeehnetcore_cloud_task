import React from 'react'
import { forecastType } from '../types/type'
import Degree from '../utils/Icons/Degree'
import Sunrise from '../utils/Icons/Sunrise'
import Sunset from '../utils/Icons/Sunset'
import Tile from '../utils/Icons/Tile'

import {
  getHumidityValue,
  getWindDirection,
  getVisibilityValue,
  getSunTime,
  getPop,
} from './../helpers/index'
type Props = {
  data: forecastType
  unit: string
}
const Forecast = ({ data, unit }: Props): JSX.Element => {
  console.log(data, 'forecast data')

  const today = data.list.list[0]
  console.log(today, 'todays data')
  const tempUnit = unit === 'metric' ? 'C' : 'F'

  const convertTemp = (temp: number) =>
    unit === 'metric' ? temp : (temp * 9) / 5 + 32

  const convertWindSpeed = (speed: number) =>
    unit === 'metric'
      ? `${Math.round(speed)} km/h`
      : `${Math.round(speed * 0.621371)} mph`

  const convertVisibility = (visibility: number) =>
    unit === 'metric'
      ? `${(visibility / 1000).toFixed(1)} km`
      : `${(visibility / 1609).toFixed(1)} miles`

  return (
    <div className="w-[1100px] md:max-w-[1100px] py-4 md:py-4 md:px-10 lg:px-24 h-full lg:h-[720px] bg-white bg-opacity-20 backdrop-blur-ls rounded drop-shadow-lg">
      <div className="mx-auto w-[300px]">
        <section className="text-center">
          <h2 className="text-2xl font-black">
            {data.name} <span className="font-thin">{data.country}</span>
          </h2>
          <h1 className="text-4xl font-extrabold">
            <Degree temp={Math.round(convertTemp(today.main.temp))} />
            {tempUnit}
          </h1>
          <p className="text-sm">
            {today.weather[0].main} ({today.weather[0].description})
          </p>
          <p className="text-sm">
            H: <Degree temp={Math.ceil(convertTemp(today.main.temp_max))} /> L:{' '}
            <Degree temp={Math.floor(convertTemp(today.main.temp_min))} />
          </p>
        </section>
        <section className="flex overflow-x-scroll mt-4 pb-2 mb-5">
          {data.list.list.map((item, i) => (
            <div
              key={i}
              className="inline-block text-center w-[50px] flex-shrink-0"
            >
              <p className="text-sm">
                {i === 0 ? 'Now' : new Date(item.dt * 1000).getHours()}
              </p>
              <img
                alt={`weather-icon-${item.weather[0].description}`}
                src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
              />
              <p className="text-sm">
                H: <Degree temp={Math.ceil(convertTemp(today.main.temp_max))} />{' '}
                L:{' '}
                <Degree temp={Math.floor(convertTemp(today.main.temp_min))} />
              </p>
            </div>
          ))}
        </section>
        <section className="flex flex-wrap justify-between text-zinc-700">
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <Sunrise /> <span className="mt-2">{getSunTime(data.sunrise)}</span>
          </div>
          <div className="w-[140px] text-xs font-bold flex flex-col items-center bg-white/20 backdrop-blur-ls rounded drop-shadow-lg py-4 mb-5">
            <Sunset /> <span className="mt-2">{getSunTime(data.sunset)}</span>
          </div>
          <Tile
            icon="wind"
            title="Wind"
            info={convertWindSpeed(today.wind.speed)}
            description={`${getWindDirection(
              Math.round(today.wind.deg)
            )}, gusts ${convertWindSpeed(today.wind.gust)}`}
          />
          <Tile
            icon="feels"
            title="Feels like"
            info={
              <Degree temp={Math.round(convertTemp(today.main.feels_like))} />
            }
            description={`Feels ${
              Math.round(today.main.feels_like) < Math.round(today.main.temp)
                ? 'colder'
                : 'warmer'
            }`}
          />
          <Tile
            icon="humidity"
            title="Humidity"
            info={`${today.main.humidity} %`}
            description={getHumidityValue(today.main.humidity)}
          />
          <Tile
            icon="pop"
            title="Precipitation"
            info={`${Math.round(today.pop * 100)}%`}
            description={`${getPop(today.pop)}, clouds at ${today.clouds.all}%`}
          />
          <Tile
            icon="pressure"
            title="Pressure"
            info={`${today.main.pressure} hPa`}
            description={` ${
              Math.round(today.main.pressure) < 1013 ? 'Lower' : 'Higher'
            } than standard`}
          />
          <Tile
            icon="visibility"
            title="Visibility"
            info={convertVisibility(today.visibility)}
            description={getVisibilityValue(today.visibility)}
          />
        </section>
      </div>
    </div>
  )
}

export default Forecast
