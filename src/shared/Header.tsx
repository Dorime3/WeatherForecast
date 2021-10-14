import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { GlobalSvgSelector } from '../assets/icons/global/GlobalSvgSelector'
import { Theme } from '../context/ThemeContext'
import { useTheme } from '../hooks/useTheme'
import s from './Header.module.scss'

interface Props {

}

export const Header = (props: Props) => {
    const theme = useTheme();


    const options = [
        { value: 524894, label: 'Москва' },
        { value: 498817, label: 'Санкт-Петербург' },
        { value: 487846, label: 'Крыжопль' }
    ]


    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100
        }),
        option: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            color: theme.theme === Theme.DARK ? '#fff' : '#000',
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000'
        })
    }
    console.log(colourStyles)
    const changeTheme = () => {
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    }



    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id='header-logo' />
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id='change-theme' />
                </div>
                <Select defaultValue={options[0]} options={options} styles={colourStyles} />
            </div>
        </header>
    )
}
