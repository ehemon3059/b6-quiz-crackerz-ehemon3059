import React from 'react';
import Option from '../Option/Option';
import './Questions.css'

const Questions = ({quiz}) => { 
    const {correctAnswer, id ,options ,question   } = quiz;
    console.log(quiz);

    return (
        <div>
            <div className="questions">
                <h3>Question :  {question}</h3>
                <div className="options">
                {
                    options.map(option => <Option key ={id}  option ={option} correctAnswer={correctAnswer}></Option>)
                }
                </div>
            </div>
        </div>
    );
};

export default Questions;