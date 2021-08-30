import React from 'react';

import Card from '../UI/Card';
import './FavoriteItem.css';

const FavoriteItem = props => {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <div className="favorite-item">
        <h2>{props.name}</h2>
        <p>{props.superPower}</p>
      </div>
    </Card>
  );
};

export default FavoriteItem;