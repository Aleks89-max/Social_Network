import React from 'react'
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../Redux/State";
type postsType = {
    posts: ProfilePageType
}

function Profile(props: postsType) {


    return (
        <div className={s.profile}>
            <ProfileInfo />
            <MyPosts posts = {props.posts} />

        </div>

    )

}

export default Profile