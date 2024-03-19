import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';
import Profile from './Profile';

function ProfileContainer(props) {
    const { userId } = useParams();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId || 30925}`);
                props.setUserProfile(response.data);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, [userId]);

    return <Profile {...props} profile={props.profile} />;
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);