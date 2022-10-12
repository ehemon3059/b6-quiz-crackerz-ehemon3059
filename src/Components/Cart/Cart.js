import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css'

const Cart = ({cart}) => {
  
    const {id,name,logo,total} = cart;

    return (
        <div>
            <div className="carts">
                <div className="course-image">
                    <img src={logo} alt="" />
                </div>
                <div className="details">
                    <h4>{name}</h4>
                    <p>Total: {total}</p>
                    <p className='practice-btn'>User Name: <Link to={`/quiz/${id}`}>{name}</Link> </p>
                </div>
            </div>
           
        </div>
    );
};

export default Cart;