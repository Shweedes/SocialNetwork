import React from 'react'
import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.navText}>
                <div className={s.item}>
                    <NavLink
                        to="/profile"
                        className={({isActive}) =>
                            isActive ? s.active : s.link}
                    >Profile
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to="/dialogs"
                        className={({isActive}) =>
                            isActive ? s.active : s.link}
                    >Massages
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to="/news"
                        className={({isActive}) =>
                            isActive ? s.active : s.link}
                    >News
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to="/music"
                        className={({isActive}) =>
                            isActive ? s.active : s.link}
                    >Music
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to="/settings"
                        className={({isActive}) =>
                            isActive ? s.active : s.link}
                    >Settings
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to="/users"
                        className={({isActive}) =>
                            isActive ? s.active : s.link}
                    >Users
                    </NavLink>
                </div>
                <div className={s.item}>
                    <NavLink
                        to=""
                        className={({isActive}) =>
                            isActive ? s.active : s.link}
                    >Friends
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

