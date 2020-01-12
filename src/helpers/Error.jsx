import React from 'react';

const Error = ({ touched, message }) => {
    if (touched === false) {
        return <div className="form-message invalid">&nbsp;</div>;
    }
    if (message) {
        return <div className="form-message invalid">{message}</div>
    }
    return <div className="form-message valid">All Good</div>;
};

export default Error;