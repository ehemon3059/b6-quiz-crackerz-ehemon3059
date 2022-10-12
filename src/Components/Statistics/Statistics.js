
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
            <h1>This is Statistics</h1>
                <div className="staistics">
                    
                    <BarChart width={500} height={200} data={total}>
                        <Bar dataKey="total" fill="#8884d8" />
                        <XAxis dataKey="" />
                        <YAxis />
                        <Tooltip></Tooltip>
                    </BarChart>
                </div>
        </div>
    );
};

export default Statistics;