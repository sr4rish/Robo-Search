import React from 'react';

const Card = ({ id, name, email }) => {
    return (
        <div className='tc hover-bg-light-green dib w-20 bg-light-blue br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='roboimg' src={`https://robohash.org/${id}?size=200x200`} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}

export default Card;