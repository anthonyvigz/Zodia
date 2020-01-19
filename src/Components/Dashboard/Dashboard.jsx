import React from 'react';
import { connect } from 'react-redux';

function Dashboard(props) {

    console.log(props)
    return(
        <h1>hey! {props.firstname}</h1>
        )
    }

const mapDispatchToProps = {

}

const mapStateToProps = (state) => {
    return {
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email
    }
  }
  
  export default(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(Dashboard)
  );