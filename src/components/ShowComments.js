import React from 'react';

const ShowComments = ({showCommentsArr, index}) => {
    
    if(showCommentsArr[index] === undefined) {
        return null;
    } else {
        
        const comments = showCommentsArr[index].map(comment => {
            
            return <p key={index} className="lead rounded bg-light mb-1 py-1 pl-1">{comment}</p>;
    
        });
        return <div>{comments}</div>;
    }
    
};

export default ShowComments;
