
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css';


const Statistics = () => {


    const [total , setTotal ] = useState([]);

    useEffect(() =>{
        axios.get('https://openapi.programming-hero.com/api/quiz')
        .then(data => {
            const totalCount = data.data.data;
            const getTotal = totalCount.map(total => {
                const result = total;
                return result; 
            });
            console.log(getTotal);
            setTotal(getTotal);
        });



    },[])
    return (
        <div>
            <div className='title'> 

            <h1>This is Questions Statistics</h1>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <div className="staistics">
                
                    <BarChart width={400} height={200} data={total}>
                        <Bar dataKey="total" fill="#8884d8" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </BarChart>
                
                </div>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;