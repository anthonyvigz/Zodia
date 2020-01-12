import React from 'react';
import '../scss/register.scss';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from '../helpers/Error';

export default function Register() {

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(1, "Must have a character")
    .max(20, "Must be shorter than 20")
    .required("Must enter a first name"),
  lastName: Yup.string()
    .min(1, "Must have a character")
    .max(20, "Must be shorter than 20")
    .required("Must enter a last name"),
  email: Yup.string()
    .email("Must be a valid email address")
    .required("Must enter an email"),
})


  return (
    <div className="register">
      <h1>SIGN UP</h1>
      <Formik 
        initialValues={{ 
          firstName: '', 
          lastName: '', 
          email: '', 
          password: '', 
          confirmPassword: '' 
        }} 
        validationSchema={validationSchema}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <form className="registerForm">
            <div className="firstLast">
              <input 
                type="text" 
                id="firstName" 
                placeholder="FIRST NAME *" 
                name="firstName"
                onChange={handleChange}
                value={values.firstName}
                onBlur={handleBlur} 
                className={(touched.firstName && errors.firstName) ? "hasError" : "validInput"}
              />
              <Error touched={touched.firstName} message={errors.firstName} />
              <input 
                type="text" 
                id="lastName" 
                placeholder="LAST NAME *" 
                name="lastName"
                onChange={handleChange}
                value={values.lastName}
                onBlur={handleBlur} 
                className={touched.lastName && errors.lastName ? "hasError" : "validInput"}
              />
              <Error touched={touched.lastName} message={errors.lastName} />
            </div>
              <input 
                type="email" 
                id="email" 
                placeholder="EMAIL *" 
                name="email"
                onChange={handleChange}
                value={values.email}
                onBlur={handleBlur} 
                className={touched.email && errors.email ? "hasError" : "validInput"}
              />
              <Error touched={touched.email} message={errors.email} />
              <input 
                type="password" 
                id="password" 
                placeholder="PASSWORD *" 
                name="password"
                onChange={handleChange}
                value={values.password}
                onBlur={handleBlur} 
                className={touched.password && errors.password ? "hasError" : "validInput"}
              />
              <Error touched={touched.password} message={errors.password} />
              <input 
                type="password" 
                id="confirmPassword" 
                placeholder="CONFIRM PASSWORD *" 
                name="confirmPassword"
                onChange={handleChange}
                value={values.confirmPassword}
                onBlur={handleBlur} 
                className={touched.confirmPassword && errors.confirmPassword ? "hasError" : "validInput"}
                />
                <Error touched={touched.confirmPassword} message={errors.confirmPassword} />
            <button type="submit">REGISTER</button>
          </form>
        )}
      </Formik>
    </div>
  );
}