import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Topic.css'
import img from './'

const Topic = () => {
    const topics = useLoaderData();
    const carts= topics.data;

   
    return (
        <div>
            <h1>This is topic</h1>
            <div className="quiz-container">
                <img src="" alt="" />
            <p>Check out our online computer programming quizzes to enhance your knowledge, learn new things or prepare for an upcoming test. Made up of well-researched and interesting quiz questions, each and every quiz here can test your awareness and grasp of the subject.</p>
            </div>
         
            <div className="cart-container">
                
                {
                    carts.map(cart=><Cart 
                        key={cart.id}
                        cart={cart}
                      
                        ></Cart>)
                }

            </div>
        </div>
    );
};

export default Topic;