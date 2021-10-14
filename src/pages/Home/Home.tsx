import React, { useEffect, useState } from 'react'
import { getWeatherThisDay } from '../../api/requestsApi'
import { Days } from './components/Days/Days'
import { ThisDay } from './components/ThisDay/ThisDay'
import { ThisDayInfo } from './components/ThisDayInfo/ThisDayInfo'
import s from './Home.module.scss'

interface Props {

}



export const Home = (props: Props) => {
    const [weatherThisDay, setWeatherThisDay] = useState(null as any)

    const getWeatherNow = async () => {
        const data: any = await getWeatherThisDay();
        setWeatherThisDay(data)
    }
    useEffect(() => {
        getWeatherNow()
    }, [])

    return (weatherThisDay &&
        <div className={s.home}>
            <div className={s.wrapper}>
                <ThisDay
                    temp={weatherThisDay.main.temp}
                    city={weatherThisDay.name}
                    precipitation={weatherThisDay.weather[0].main} />
                <ThisDayInfo
                    temp={weatherThisDay.main.temp}
                    feelsLike={weatherThisDay.main.feels_like}
                    pressure={weatherThisDay.main.pressure}
                    precipitation={weatherThisDay.weather[0].main}
                    wind={weatherThisDay.wind} />
            </div>
            <Days />
        </div>
    )
}
