import React from 'react';
import { connect } from 'react-redux';
import '../../scss/dashboard/sidenav.scss';

function SideNav(props) {

    return(
        <div className="sideNav">
            <h3>navbar for {props.firstname}</h3>
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
    )(SideNav)
  );