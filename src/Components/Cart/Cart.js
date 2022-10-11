import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    console.log(cart);
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
                    <button>Start Practice</button>
                </div>
            </div>
           
        </div>
    );
};

export default Cart;