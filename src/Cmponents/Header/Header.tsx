import React from "react";
import s from './Header.module.css'
function Header () {
    return (
        <div className={s.header}>
         <img className='img' src='https://backend.tomsk.ru/api/v1/news-image/918168' alt='image'/>
        </div>

    )

}
export default Header