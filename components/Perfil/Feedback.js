import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

const PerfilFeedback = ({ route }) => {
  const { persona } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
        <Image source={persona.imagen} style={styles.profileImage} />
      </View>
      <View style={styles.feedbackContainer}>
        <Text style={styles.nombre}>{persona.nombre} - {persona.edad} años</Text>
        <Text style={styles.genero}>{persona.genero}</Text>
        <Text style={styles.localidad}>Localidad: {persona.localidad}</Text>
        <Text style={styles.feedbackTitle}>Valoración promedio: </Text>
        <Text style={styles.feedbackTitle}>Valoraciones</Text>
        {persona.feedback.map((feedback, index) => (
          <View key={index} style={styles.feedbackItem}>
            <Text>Anónimo: {feedback.anonimo ? 'Sí' : 'No'}</Text>
            <Text>Persona ID: {feedback.persona_id}</Text>
            <Text>Valoración: {generateRatingStars(feedback.valoracion)} ({feedback.valoracion.toFixed(1)})</Text>
            <Text>Comentarios: {feedback.comentarios}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imagenContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  feedbackContainer: {
    marginTop: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  genero: {
    fontSize: 16,
    color: '#888888',
  },
  localidad: {
    fontSize: 16,
    color: '#888888',
  },
  feedbackTitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  feedbackItem: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
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

export default PerfilFeedback;
