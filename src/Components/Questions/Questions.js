import React from 'react';
import Option from '../Option/Option';
import './Questions.css'
import { FaRegEyeSlash } from 'react-icons/fa';
import toast, { Toaster } from 'react-hot-toast';

const Questions = ({quiz}) => { 
    const {correctAnswer, id ,options ,question   } = quiz;
  //  console.log(quiz);

   
//console.log(correctAnswer);
const handelAnswer =() =>{
    toast.success(correctAnswer);
}
    return (
        <div>
            <div><Toaster/></div>
            <div className="questions">
                <div className="elements">
                    <h3>Question :  {question}</h3>
                    <div className="show-answer" onClick={handelAnswer}>
                        <h4>show answer </h4>
                        <span className='icon' ><FaRegEyeSlash/></span>
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