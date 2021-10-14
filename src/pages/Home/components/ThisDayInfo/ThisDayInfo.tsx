import React from 'react'
import cloud from '../../../../assets/images/cloud.png'

import s from './ThisDayInfo.module.scss'
import { ThisDayItem } from './ThisDayItem'

export interface Wind {
    speed: number,
    deg: number,
    gust: number
}

interface Props {
    temp: number,
    feelsLike: number,
    pressure: number,
    precipitation: string,
    wind: Wind
}
export interface Item {
    icon_id: string,
    name: string,
    value: string
}

export const ThisDayInfo = ({ temp, feelsLike, pressure, precipitation, wind }: Props) => {

    const levelOfPressure = (pressure: number) => {
        if (pressure > 750 && pressure < 770) {
            return 'нормальное'
        } else if (pressure > 770) {
            return 'высокое'
        } else { return 'низкое' }
    }

    const diarectionOfWind = (deg: number) => {
        const directions = ['север', 'северо-восток', 'восток', 'юго-восток', 'юг', 'юго-запад', 'запад', 'северо-запад']
        deg = Math.round(deg * 8 / 360);
        return directions[deg]
    }

    const strengthOfWind = (speed: number) => {
        if (speed < 5) return 'легкий';
        if (speed >= 5 && speed < 10) return 'умеренный';
        if (speed >= 10 && speed < 20) return 'сильный';
        if (speed > 20) return 'шторм';
    }


    const items = [{
        icon_id: 'temp',
        name: 'Температура',
        value: `${temp}° - ощущается как ${feelsLike}°`
    },
    {
        icon_id: 'pressure',
        name: 'Давление',
        value: `${Math.round(pressure / 1.333)} мм ртутного столба - ${levelOfPressure(Math.round(pressure / 1.333))}`
    },
    {
        icon_id: 'precipitation',
        name: 'Осадки',
        value: `${precipitation}`
    },
    {
        icon_id: 'wind',
        name: 'Ветер',
        value: `${Math.round(wind.speed)} м/с ${diarectionOfWind(wind.deg)} - ${strengthOfWind(wind.speed)} ветер`
    }]
    return (
        <div className={s.this_day_info}>
            <div className={s.this_day_info_items}>
                {items.map((item: Item) =>
                    <ThisDayItem key={item.icon_id} item={item} {...{ temp, feelsLike, pressure, precipitation, wind }} />
                )}
            </div>
            <img className={s.cloud_img} src={cloud} alt='img'></img>
        </div>
    )
}
