import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, updateStatus, viewCurrentProfile} from "../../redux/profilePageReducer";
import {Navigate, useParams} from 'react-router-dom';
import {withAuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";
import Preloader from "../common/Preloader/Preloader";

const ProfileContainer = (props) => {
    const {userId} = useParams(); // Получаем параметр userId из маршрута

/*    useEffect(() => {
        let currentUserId = userId || 31765; // Если userId не задан, используем 2
        props.viewCurrentProfile(currentUserId);
        props.getStatus(currentUserId);
    }, [userId]);*/

    useEffect(() => {
        let currentUserId = userId;

        if (!currentUserId) {
            currentUserId = 31765;
        }

        props.viewCurrentProfile(currentUserId);
        props.getStatus(currentUserId)

    }, [userId]);

    if (!props.profile) {
        return <Preloader/>; // Или любой другой индикатор загрузки
    }

    return (
        <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
    );
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});
export default compose(connect(mapStateToProps, {viewCurrentProfile, getStatus, updateStatus}))(ProfileContainer)
