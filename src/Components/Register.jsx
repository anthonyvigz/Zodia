import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import '../scss/register.scss';

export default function Register() {

  const StyledInput = withStyles({
    root: {
      margin: "15px 20px"
    },
  })(TextField);

  return (
    <div className="registerPage">
      <form className="registerForm" noValidate autoComplete="off">
        <div className="firstLast">
          <StyledInput id="outlined-basic" label="First Name" variant="outlined" />
          <StyledInput id="outlined-basic" label="Last Name" variant="outlined" />
        </div>
        <StyledInput id="outlined-basic" label="Email" variant="outlined" />
        <StyledInput id="outlined-basic" label="Password" variant="outlined" />
      </form>
    </div>
  );
}