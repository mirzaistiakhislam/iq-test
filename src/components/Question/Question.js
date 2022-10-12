import React from 'react';

const Question = ({ testQuestion, index }) => {

    // console.log(question, index);

    const { question, options, correctAnswer } = testQuestion;

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Test {index + 1}: {question}
                </div>
                <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                </div>

            </div>
            <br /> <br /> <br />
        </div>
    );
};

export default Question;