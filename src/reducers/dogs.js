const initialState = [
  {
    name: 'a dog'
  },
  {
    name: 'another dog'
  },
  {
    name: 'final dog'
  }
];

export default function(state = initialState, action) {
  switch(action.type) {
    default:
      return state;
  }
}

