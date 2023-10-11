import React from 'react';
import Card from '../components/card';

const CardList = ({ robots }) => {
  return (
    <div style={{marginBottom: '1.5rem'}}>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;