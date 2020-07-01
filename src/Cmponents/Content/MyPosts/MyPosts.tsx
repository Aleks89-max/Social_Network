import React from 'react'
import Post from "./Posts/Post";
import s from './MyPosts.module.css';
import {ProfilePageType} from "../../../Redux/State";

type postsType = {
    posts: ProfilePageType
    addPost: (message:string) => void
}


function MyPosts(props: postsType) {
    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        let text = newPostElement.current?.value
        if(text) {
            props.addPost(text)
            alert(text)
        }
    }

    let postsElements = props.posts.posts
        .map((p) => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>)

    return (

        <div className={s.postsBlock}>
            <h3>MyPost</h3>
            <div><textarea ref={newPostElement}>Утречка</textarea></div>
            <div>
                <button onClick={addPost}>add Post</button>
            </div>
            <div className={s.posts}>New post</div>
            {postsElements}
        </div>


    )

}

export default MyPosts