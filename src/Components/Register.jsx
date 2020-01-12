import React from 'react';
import '../scss/register.scss';

export default function Register() {


  return (
    <div className="register">
      <h1>SIGN UP</h1>
      <form className="registerForm" noValidate autoComplete="off">
        <div className="firstLast">
          <input type="text" placeholder="FIRST NAME *" name="firstName" />
          <input type="text" placeholder="LAST NAME *" name="lastName" />
        </div>
        <input type="text" placeholder="EMAIL *" name="email" />
        <input type="password" placeholder="PASSWORD *" name="password" />
        <input type="password" placeholder="CONFIRM PASSWORD *" name="password" />
      </form>
    </div>
  );
}