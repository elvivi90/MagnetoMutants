import React, { useContext } from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { MutantsContext } from "../context/mutants-context";
import './Products.css';

const Favorites = props => {
  
  const [mutantList, setMutantList] = useContext(MutantsContext);
  // const mutantList = useContext(MutantsContext).products;
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (mutantList.length > 0) {
    content = (
        <ul className="products-list">
            {mutantList.map((prod) => (
                <FavoriteItem
                    name={prod.name}
                    superPower={prod.superPower}
                />
            ))}
        </ul>
    );
  }
  return content;
};

export default Favorites;
