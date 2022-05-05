import React from 'react';
import useSixProducts from '../../hooks/useSixProducts';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const MyChart = () => {
    const [sixProducts] = useSixProducts();

    return (
        <>
            <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart
                        width={300}
                        height={300}
                        data={sixProducts}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="quantity" stroke="#8884d8" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="price" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </>
    );
};

export default MyChart;