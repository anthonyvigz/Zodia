import React from 'react';
import { connect } from 'react-redux';
import SideNav from './SideNav';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import '../../scss/dashboard/dashboard.scss';


// this sets up the spacing for the dashboard components so it's center
// within the navigation

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex'
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(8, 4)
    }
  }));

function Dashboard(props) {

    const classes = useStyles();

    console.log(props)
    return(
        <div className="mainDashboard">
            <SideNav />
            <main className={classes.content}>
                {/* props.children is needed to show all the data in reach router
                and the protected routes */}
                <Container>{props.children}</Container>
            </main>
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
    )(Dashboard)
  );