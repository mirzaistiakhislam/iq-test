import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const showAnswer = () => {
        toast(`Correct: ${correctAnswer}`);
    }

    return (
        <div>
            <div className="card text-center">
                <div className="card-header d-flex justify-content-between">
                    Test {index + 1}: {question}
                    <p onClick={() => showAnswer()} ><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></p>
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

            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Question;