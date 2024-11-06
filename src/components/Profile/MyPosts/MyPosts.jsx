import React from 'react'
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.profilePage.postsData
        .map(post => <Post message={post.message} likeCounter={post.likeCounter}/>)

    let onAddPost = () => {
       props.addPost();
    }

    let onPostChange = (e) => {
        let newText = e.target.value;
        props.updateNewPostText(newText);
    }

    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <textarea
                value={props.profilePage.newPostText}
                onChange={onPostChange}
            />
            <div>
                <button onClick={onAddPost}>Add post</button>
                <button>Delete post</button>
            </div>

            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
}

export default MyPosts