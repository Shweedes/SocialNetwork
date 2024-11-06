import React from 'react'
import s from './Profile.module.css'
import PostInfo from './PostInfo/PostInfo'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <PostInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile