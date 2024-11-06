import React from 'react'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthData} from "../../redux/authReducer";

class HeaderContainer extends React.Component  {

    componentDidMount(){
      this.props.getAuthData();
    }

   render(){
       return (
           <Header {...this.props}/>
       )
   }

}


const mapStateToProps = (state) =>({
    isAuth: state.isAuth,
    login: state.login,
})
export default connect(mapStateToProps,  {getAuthData})(HeaderContainer)