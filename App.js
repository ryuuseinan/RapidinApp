import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Dimensions, SafeAreaView } from 'react-native';

const screenWidth = Dimensions.get('window').width;
const photoSize = screenWidth / 2 - 20; // Tamaño cuadrado para cada foto

const people = [
  {
    id: 1,
    name: 'Hernan',
    image: require('./assets/1.jpg'),
    km: 1,
    online: false,
    rating: 4.6,
  },
  {
    id: 2,
    name: 'Josefa',
    image: require('./assets/2.webp'),
    km: 3,
    online: true,
    rating: 4.4,
  },
  {
    id: 3,
    name: 'Graciela',
    image: require('./assets/3.jpg'),
    km: 3,
    online: true,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'Veronica',
    image: require('./assets/4.jpg'),
    km: 5,
    online: false,
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Kaneda',
    image: require('./assets/5.jpg'),
    km: 2,
    online: true,
    rating: 1.0,
  },
];

people.sort((a, b) => a.km - b.km);
const GrindrScreen = () => {
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Cariños@s</Text>
        </View>
        <ScrollView contentContainerStyle={styles.gallery}>
          {people.map((person) => (
            <View key={person.id} style={styles.personContainer}>
              <View style={styles.imageContainer}>
                <Image source={person.image} style={styles.personImage} />
                <View
                  style={[
                    styles.statusDot,
                    {
                      backgroundColor: person.online ? 'green' : 'gray',
                      position: 'absolute',
                      top: 5,
                      left: 5,
                      width: 10,
                      height: 10,
                      borderRadius: 10, // Círculo online/offline
                    },
                  ]}
                />
                <View style={styles.kmContainer}>
                  <Text style={styles.kmText}>{person.km} km</Text>
                </View>
              </View>
              <Text style={styles.personName}>{person.name}</Text>
              <View style={styles.ratingContainer}>
                {generateRatingStars(person.rating)}
              </View>
              <Text style={styles.ratingText}>({person.rating.toFixed(1)})</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 20,
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  gallery: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Espacio entre las fotos
    paddingHorizontal: 10,
  },
  personContainer: {
    alignItems: 'left',
    marginBottom: 20,
  },
  personImage: {
    width: photoSize,
    height: photoSize,
    borderRadius: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  personName: {
    flex: 1,
    width: photoSize,
    marginTop: 5,
    textAlign: 'center',
  },
  distanceText: {
    flex: 1,
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
  },
  kmContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  distanceText: {
    marginTop: 5,
    textAlign: 'center',
    fontSize: 12,
    color: 'gray',
  },
  kmContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  kmText: {
    color: 'white',
    fontSize: 12,
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  ratingText: {
    flex: 1,
    textAlign: 'center',
  },
  star: {
    fontSize: 20, // Tamaño de la estrella
    marginVertical: 2, // Espacio vertical entre estrellas
  },
});


const generateRatingStars = (rating) => {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const emptyStars = maxRating - filledStars;

  const filledStar = '★'; // Estrella rellena
  const emptyStar = '☆'; // Estrella vacía

  const stars = [];

  for (let i = 0; i < filledStars; i++) {
    stars.push(<Text key={i} style={styles.filledStar}>{filledStar}</Text>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Text key={i + filledStars} style={styles.emptyStar}>{emptyStar}</Text>);
  }

  return stars;
};

export default GrindrScreen;