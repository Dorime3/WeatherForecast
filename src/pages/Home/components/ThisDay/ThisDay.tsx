import React from 'react'
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector'
import { useDate } from '../../../../hooks/useData';

import s from './ThisDay.module.scss'

interface Props {
    temp: number,
    city: string,
    precipitation: string
}

export const ThisDay = ({ temp, city, precipitation }: Props) => {
    const { time } = useDate();
    return (
        <div className={s.this_day}>
            <div className={s.top_block}>
                <div className={s.top_block_wrapper}>
                    <div className={s.this_temp}>{Math.round(temp)}°</div>
                    <div className={s.this_day_name}>Сегодня</div>
                </div>
                <GlobalSvgSelector id={precipitation} />
            </div>
            <div className={s.bottom_block}>
                <div className={s.this_time}>
                    Время:
                    <span> {time}</span>
                </div>
                <div className={s.this_city}>
                    Город:
                    <span> {city}</span>
                </div>
            </div>
        </div>
    )
}
