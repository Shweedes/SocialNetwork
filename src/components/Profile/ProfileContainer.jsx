/*import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { viewCurrentProfile} from "../../redux/profilePageReducer";
import {useParams} from 'react-router-dom';


// Классовый компонент
class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.userId;

        if(!userId) {
            userId = 2;
        }

        this.props.viewCurrentProfile(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

// Обертка для получения userId через useParams и передачи в ProfileContainer
const ProfileContainerWithRouter = (props) => {
    const {userId} = useParams(); // Получаем параметр userId из маршрута// useParams возвращает объект с параметрами маршрута

    return <ProfileContainer {...props} userId={userId} />;
};

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {viewCurrentProfile})(ProfileContainerWithRouter);*/

import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {viewCurrentProfile} from "../../redux/profilePageReducer";
import {useParams} from 'react-router-dom';

const ProfileContainer = (props) => {
    const {userId} = useParams(); // Получаем параметр userId из маршрута

    useEffect(() => {
        let currentUserId = userId;

        if (!currentUserId) {
            currentUserId = 2;
        }

        props.viewCurrentProfile(currentUserId);
    }, [userId, props]); // Выполнить только при изменении userId или props

    return (
        <Profile profile={props.profile}/>
    );
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {viewCurrentProfile})(ProfileContainer);
