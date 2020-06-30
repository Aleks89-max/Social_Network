import React from 'react'
import Post from "./Posts/Post";
import s from './MyPosts.module.css';
import {ProfilePageType} from "../../../Redux/State";
type postsType = {
    posts: ProfilePageType
}


function MyPosts(props: postsType) {



    let postsElements = props.posts.posts
        .map((p)=> <Post message={p.message} likeCount={p.likeCount} id={p.id} /> )

    return (

        <div className={s.postsBlock}>
           <h3>MyPost</h3>
            <div className={s.posts}>New post</div>
            {postsElements}
        </div>


    )

}

export default MyPosts