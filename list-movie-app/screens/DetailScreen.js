import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const DetailScreen = ({ navigation }) => {
  const { selectedMovie } = store.getState();
  return (
    <View style={styles.container}>
      <Image style={styles.movieImage} source={{ uri: selectedMovie.image }} />
      <Text style={styles.movieTitle}>{selectedMovie.title}</Text>
      <Text style={styles.movieYear}>{selectedMovie.releaseYear}</Text>
      <Text style={styles.movieGenre}>{selectedMovie.genre}</Text>
      <Text style={styles.movieRating}>Rating: {selectedMovie.rating}/10</Text>
      <Text style={styles.movieDescription}>{selectedMovie.description}</Text>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
