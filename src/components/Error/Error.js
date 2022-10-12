import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2>you are lost</h2>
            <Link to='/'>go home</Link>
        </div>
    );
};

export default Error;