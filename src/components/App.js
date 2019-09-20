import React from 'react';
import PostList from './PostList'

const App = () => {
    return (
        <div className="container mt-2">
            <div className="jumbotron text-center">
                <h1 className="display-4">Welcome To Mark's Awesome Blog!</h1>
                <p className="lead">Talk about anything you want to! Mixed-Martial Arts, Funny Movies, or Web Programming!</p>
            </div>
            <div>
                <PostList />
            </div>
        </div>
    );
};

export default App;