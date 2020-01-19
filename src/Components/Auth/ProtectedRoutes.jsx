import React from 'react';
import { Router, Redirect } from '@reach/router';
import Dashboard from '../../../views/dashboard/Dashboard';

function ProtectedRoutes() {
    // eslint-disable-next-line consistent-return
    function getToken() {
      try {
        const token = localStorage.getItem('token');
        return token;
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
        return null;
      }
    }
    const token = getToken();
  
    if (!token) {
      return <Redirect to="/" noThrow />;
    }
    return (
      <Router>
        <Dashboard path="/">

        </Dashboard>
      </Router>
    );
  }
  
  export default ProtectedRoutes;