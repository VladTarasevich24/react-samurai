import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {


    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )

}

export default Profile;