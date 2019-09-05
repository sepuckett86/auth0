const ADD_DOG = 'ADD_DOG';

export const addDog = dog => {
  return {
    type: ADD_DOG,
    payload: dog
  };
};
