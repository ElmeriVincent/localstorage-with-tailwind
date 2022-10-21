import React from 'react'
import { BsLightbulb } from 'react-icons/bs'
import { BsLightbulbOff } from 'react-icons/bs'

export default function Navbar({ darkMode, changeTheme }) {

    // reusable style
    const navLinkTextStyle = "text-xl text-slate-800 uppercase px-4 dark:text-white gap-2";

    // Button that enables/disables darkmode across pages.
    const ChangeThemeButton = () => {
        return (
            <button type="button" onClick={changeTheme}>
                {darkMode === false
                    ? <BsLightbulb className="text-slate-800 text-2xl" />
                    : <BsLightbulbOff className="text-white text-2xl" />}
            </button>
        )
    }

    return (
        <nav className="relative w-full border-b border-gray-400 bg-white dark:bg-slate-800">
            <div className="flex items-center justify-center">
                <div className="p-2 flex">
                    <a href="/" className={navLinkTextStyle}>Page 1</a>
                    <a href="/page2" className={navLinkTextStyle}>Page 2</a>
                    <ChangeThemeButton className="text-3xl" />
                </div>
            </div>
        </nav>
    )
}
