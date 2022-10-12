import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Topics from '../Topics/Topics';

const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <Header></Header>

            <div>
                {
                    topics.data.map(topic => <Topics
                        key={topic.id}
                        topic={topic}
                    ></Topics>)
                }
            </div>

        </div>
    );
};

export default Home;