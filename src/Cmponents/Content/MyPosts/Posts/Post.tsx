import React from "react";
import s from "./Post.module.css";
import {PostsType} from "../../../../Redux/State";

function Post(props: PostsType) {
    return (


            <div className={s.item}><img
                src='https://avatars.mds.yandex.net/get-pdb/1025945/86f10e6d-eab5-4572-8c07-c672b854d2a5/s1200?webp=false'
                alt="АВа"/>{props.message}
                <div>
                <span>{props.likeCount}</span>
                </div>
            </div>


    )

}
export default Post