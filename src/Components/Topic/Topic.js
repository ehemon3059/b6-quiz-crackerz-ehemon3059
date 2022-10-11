import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Topic.css'

const Topic = () => {
    const topics = useLoaderData();
    const carts= topics.data;

   
    return (
        <div>
            <h1>This is topic</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus enim amet eum nam assumenda accusantium quia quis, labore nisi nobis porro deleniti aperiam accusamus minima voluptatum recusandae autem, libero natus magnam nostrum voluptatibus qui illum fuga. Nobis necessitatibus provident velit veniam tenetur commodi aperiam ad incidunt corrupti officia neque obcaecati, magnam iusto consectetur quos mollitia quis tempora unde quam asperiores similique minus harum ab consequuntur. Ipsum omnis aspernatur maxime distinctio provident perferendis, veritatis repellat iste quod corrupti, placeat et earum reiciendis dolorem voluptas accusamus quasi dolorum! Iste corrupti accusamus doloribus odit, similique delectus voluptatem possimus dolor itaque unde eos at?</p>
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