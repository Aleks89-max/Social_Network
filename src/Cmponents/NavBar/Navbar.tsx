import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
function Navbar () {
    return (
        <div className={s.nav}>
            <div className={`${s.item} ${s.active}`}><NavLink to='/profile'>Profile</NavLink></div>
            <div className={s.item}><NavLink to ='/dialogs'>Messages</NavLink></div>
            <div className={s.item}><NavLink to ='/news' activeClassName={s.active} >News</NavLink></div>
            <div className={s.item}><NavLink to ='/music'>Music</NavLink></div>
            <div className={s.item}><NavLink to ='/settings'>Settings</NavLink></div>
        </div>
    );

}
export default Navbar
