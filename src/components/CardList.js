import React from 'react';
import Card from './Card';

const CardList = ({ robot }) => {
    return (
        robot.map(user => {
            return <Card key={user.id} id={user.id} name={user.name} email={user.email} />
        })
    )
}

export default CardList;