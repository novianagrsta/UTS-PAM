import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Define initial state
const initialState = {
  movieList: [
    {
      id: 1,
      title: 'Joker',
      releaseYear: 2019,
      rating: 8.5,
      genre: 'Crime, Drama, Thriller',
      image: 'https://images-na.ssl-images-amazon.com/images/I/71i2XhHU3kL._AC_SY879_.jpg',
      description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.'
    },
    {
      id: 2,
      title: 'Avengers: Endgame',
      releaseYear: 2019,
      rating: 8.4,
      genre: 'Action, Adventure, Drama',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81AiVzW%2B5gL._AC_SL1500_.jpg',
      description: 'After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      releaseYear: 2008,
      rating: 9.0,
      genre: 'Action, Crime, Drama',
      image: 'https://images-na.ssl-images-amazon.com/images/I/81k7xhTfUkL._AC_SY879_.jpg',
      description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.'
    }
  ],
  selectedMovie: null
};