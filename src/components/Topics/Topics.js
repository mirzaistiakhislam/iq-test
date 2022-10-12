import React from 'react';
import { Link } from 'react-router-dom';
import './Topics.css';

const topics = ({ topic }) => {

    const { id, logo, name, total } = topic;
    return (
        <div className="card mb-3">
            <img src={logo} className="card-img-top rounded mx-auto" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"><small className="">Questions: {total}</small></p>
                <Link to={`/quiz/${id}`}>
                    <button type="button" className="btn btn-dark w-100">Start Test</button>
                </Link>
            </div>
        </div>
    );
};

export default topics;