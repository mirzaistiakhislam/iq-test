import React from 'react';
import { toast } from 'react-toastify';

const Question = ({ testQuestion, index }) => {

    console.log(testQuestion, index);

    const { question, options, correctAnswer } = testQuestion;

    const checkAnswer = option => {
        if (correctAnswer === option) {
            toast("Answer is correct");
        }
        else {
            toast("Answer was wrong");
        }
    }

    return (
        <div>
            <div className="card text-center">
                <div className="card-header">
                    Test {index + 1}: {question}
                </div>
                <div className="card-body">
                    {
                        options.map(option => <div key={option}>
                            <input onClick={() => checkAnswer(option)} type="radio" name="radio2" value={option} />
                            <label>{option}</label>
                        </div>)

                    }
                </div>

            </div>
            <br /> <br /> <br />
        </div>
    );
};

export default Question;