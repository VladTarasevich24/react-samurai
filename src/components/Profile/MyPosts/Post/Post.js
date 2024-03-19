import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-372-456324.png" alt="avatar" />
            <div className={s.message}>{props.message}</div>
            <div className={s.likes}>
                <span>Likes {props.likesCount}</span>
            </div>
        </div>
    )


}

export default Post;