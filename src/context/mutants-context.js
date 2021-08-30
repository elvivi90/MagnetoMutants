import React, { useState } from 'react';

export const MutantsContext = React.createContext();

export default props => {
  const [mutantList, setMutantList] = useState([
  ]);

  // const toggleFavorite = productId => {
  //   setProductsList(currentProdList => {
  //     const prodIndex = currentProdList.findIndex(p => p.id === productId);
  //     const newFavStatus = !currentProdList[prodIndex].isFavorite;
  //     const updatedProducts = [...currentProdList];
  //     updatedProducts[prodIndex] = {
  //       ...currentProdList[prodIndex],
  //       isFavorite: newFavStatus
  //     };
  //     return updatedProducts;
  //   });
  // };

  // const addMutant = newMutant => {

  // }

  return (
      <MutantsContext.Provider value={[mutantList, setMutantList]}>
          {props.children}
      </MutantsContext.Provider>
  );
};
