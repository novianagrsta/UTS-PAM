import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Define reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SELECTED_MOVIE':
      return {
        ...state,
        selectedMovie: action.payload
      };
    default:
      return state;
  }
};