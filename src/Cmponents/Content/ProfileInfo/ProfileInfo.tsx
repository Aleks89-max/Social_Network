import React from 'react'
import s from './ProfileInfo.module.css'


function ProfileInfo () {
    return (
        <div className={s.profileInfo}>
            <div className={s.content}>
                <img src='https://aptxt.com/wp-content/uploads/2016/04/socseti.jpg' alt='image'/>
            </div>
            <div><img
                src="https://besthqwallpapers.com/Uploads/18-3-2020/125091/groovy-metal-logo-grunge-programming-language-signs-blue-metal-background-groovy.jpg"
                alt="image"/>
            </div>
            <div className={s.ava}>
                ava + description
            </div>

        </div>

    )

}

export default ProfileInfo