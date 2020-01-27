import React from 'react';
import { connect } from 'react-redux';
import '../../scss/dashboard/profile.scss';

function Profile(props) {

    console.log(props);

    return(
        <div className="profilePage">
            <div className="topBanner">
                <img className="profilePhoto" src="https://images.unsplash.com/photo-1518806118471-f28b20a1d79d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                <div className="nameBlock">
                    <h1>My first name is: {props.firstname}</h1>
                </div>
            </div>
            <h2>This is your email address: {props.email}</h2>
            <h2>This is your last name: {props.lastname}</h2>
        </div>
    )

}




const mapStateToProps = (state) => {
    return {
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        email: state.user.email
    }
  }
  
  export default(
    connect(
        mapStateToProps,
        null
    )(Profile)
  );