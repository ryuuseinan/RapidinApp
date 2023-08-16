import React from 'react';
import { View, StyleSheet, ScrollView, Image, Text, Dimensions, SafeAreaView, TouchableOpacity } from 'react-native';
import persona from '../data';
import { useNavigation } from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;
const photoSize = screenWidth / 2 - 20;

persona.sort((a, b) => a.km - b.km);
const RapidinAppScreen = ({ navigation }) => {
  const personaActivas = persona.filter(persona => persona.activo);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.gallery}>
          {personaActivas.map((persona) => (
            <TouchableOpacity
              key={persona.id}
              style={styles.personaContainer}
              onPress={() => navigation.navigate('Profile', { persona })}
            >
              <View style={styles.imageContainer}>
                <Image source={persona.imagen} style={styles.personaImage} />
                <View
                  style={[
                    styles.statusDot,
                    {
                      backgroundColor: persona.online ? 'green' : 'gray',
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
                  <Text style={styles.kmText}>{persona.km} km</Text>
                </View>
              </View>
              <Text style={styles.personanombre}>{persona.nombre} ({persona.edad})</Text>
              <View style={styles.ratingContainer}>
                {generateRatingStars(persona.rating)}
              </View>
              <Text style={styles.ratingText}>({persona.rating.toFixed(1)})</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <Image source={require('../../assets/UI/ubicacion.png')} style={{ width: 20, height: 20 }} />
            <Text style={styles.footerButtonText}>Cerca</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image source={require('../../assets/UI/charlar.png')} style={{ width: 20, height: 20 }} />
            <Text style={styles.footerButtonText}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <Image source={require('../../assets/UI/usuario.png')} style={{ width: 20, height: 20 }} />
            <Text style={styles.footerButtonText}>Perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 5,
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
  personaContainer: {
    alignItems: 'left',
    marginBottom: 20,
  },
  personaImage: {
    width: photoSize,
    height: photoSize,
    borderRadius: 10,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    
  },
  personanombre: {
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 0,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  footerButton: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 0,
    borderColor: 'gray',
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  footerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
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

export default RapidinAppScreen;