import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <Header></Header>

            <div>
                {
                    topics.data.map(topic => {
                        console.log(topic.id);
                    })
                }
            </div>

        </div>
    );
};

export default Home;