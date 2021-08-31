import React, { useContext } from 'react';

import FavoriteItem from '../components/Favorites/FavoriteItem';
import { MutantsContext } from "../context/mutants-context";
import './Products.css';

const Favorites = props => {
  
  const [mutantList, setMutantList] = useContext(MutantsContext);
  
  const removehandler = (mutant) =>{
        const updatedMutants = mutantList.filter(mut =>(mut.id !== mutant));
        setMutantList(updatedMutants);
        console.log({ mutantList });
  };

  if (mutantList.length === 0){
    return <p className="placeholder">No hay mutantes aun!</p>;
  }
  
  return(
        <ul className="products-list">
            {mutantList.map((mut) => (
                <FavoriteItem
                    key={mut.id}
                    id={mut.id}
                    name={mut.name}
                    superPower={mut.superPower}
                    remove={removehandler}
                />
            ))}
        </ul>
    );
};

export default Favorites;
