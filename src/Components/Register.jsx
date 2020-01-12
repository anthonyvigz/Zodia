import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { findByLabelText } from '@testing-library/react';

export default function Register() {

  return (
    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Vigz" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
  );
}