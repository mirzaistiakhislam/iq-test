import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {

    const testData = useLoaderData();
    // console.log(testData);

    const { name, questions } = testData.data;

    return (
        <div>
            <h2>Quiz of {name}</h2>
            <div>
                {
                    questions.map((question, index) => <Question
                        key={question.id}
                        testQuestion={question}
                        index={index}
                    ></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;