export const TOGGLE_FAV = 'TOGGLE_FAV';
export const ADD_MUTANT = 'addMutant';

export const toggleFav = id => {
    return { type: TOGGLE_FAV, productId: id };
};

export const addMutant = (id) => {
    return { type: ADD_MUTANT, productId: id };
};