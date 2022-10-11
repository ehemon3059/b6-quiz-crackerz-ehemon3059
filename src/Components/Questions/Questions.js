import React from 'react';
import Option from '../Option/Option';
import './Questions.css'
import { FaRegEyeSlash } from 'react-icons/fa';

const Questions = ({quiz}) => { 
    const {correctAnswer, id ,options ,question   } = quiz;
   // console.log(quiz);

    return (
        <div>
            <div className="questions">
                <div className="elements">
                    <h3>Question :  {question}</h3>
                    <div className="show-answer">
                    <h4>show answer  <span className='icon'><FaRegEyeSlash/></span> </h4>
                    </div>
                   
                </div>
               
                <div className="options">
                {
                    options.map(option => <Option   option ={option} correctAnswer={correctAnswer}></Option>)
                }
                </div>
            </div>
        </div>
    );
};

export default Questions;