import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post id = {p.id} message={p.message} likesCount={p.likesCount} />)
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    }
    return (
        <div className={s.myPosts}>
            <h2>My Posts</h2>
            <div className={s.newPost}>
                <div>
                    <textarea onChange = {onPostChange}  ref={newPostElement}
                              value = {props.newPostText}
                    />
                </div>
                <div>
                    <button onClick = {onAddPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )


}

export default MyPosts;