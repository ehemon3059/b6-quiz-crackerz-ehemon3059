import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';


const Quiz = () => {
   const allQuiz = useLoaderData([]);
   const questions = (allQuiz.data.questions);
  // console.log(questions);
    return (
        <div>
            <div className="question">
                {
                    questions.map(quiz => <Questions key={quiz.id} quiz={quiz}></Questions>)
                }
            </div>
        </div>
    );
};

export default Quiz;