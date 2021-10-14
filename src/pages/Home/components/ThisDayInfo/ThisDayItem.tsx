import React from 'react'
import { IndicatorSvgSelector } from '../../../../assets/icons/indicators/IndicatorSVGSelector'
import { Item, Wind } from './ThisDayInfo'
import s from './ThisDayInfo.module.scss'

interface Props {
    item: Item,
    temp: number,
    feelsLike: number,
    pressure: number,
    precipitation: string,
    wind: Wind
}

export const ThisDayItem = ({ item }: Props) => {
    const { icon_id, name, value } = item
    return (
        <div className={s.item}>
            <div className={s.indicator}><IndicatorSvgSelector id={icon_id} /></div>
            <div className={s.indicator_name}>{name}</div>
            <div className={s.indicator_value}>{value}</div>
        </div>
    )
}
