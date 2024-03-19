import React from 'react';
import s from './ProfileInfo.module.css';
import userAvatar from '../../../assets/images/user.jpg'
import userPhoto from "../../../assets/images/user.jpg";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return null;
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.image}>
                <img src='https://img.freepik.com/premium-vector/abstract-background-modern-elegant-colorful-banner-background-vector_392592-215.jpg' alt="Profile" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar} alt="avatar"/>
                <h1>{props.profile.fullName}</h1>
                <h2>{props.profile.aboutMe}</h2>
            </div>
        </div>
    )


}

export default ProfileInfo;