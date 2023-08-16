import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Button, TouchableOpacity } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';
const ProfileScreen = ({ route }) => {
  const { persona } = route.params;
  const emoji = persona.sexo ? 'Femenino' : 'Masculino';
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const navigation = useNavigation();

  const handleServiceSelect = (index) => {
    const selectedService = persona.servicios[index];
    setSelectedServiceId(selectedService.id);
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <View style={styles.imagenContainer}>
          <Image source={persona.imagen} style={styles.profileImagen} />
        </View>
        <View style={styles.perfilContainer}>
          <Text style={styles.nombre}>
            {persona.nombre} {persona.edad}
            <View style={[styles.statusDot,
                {
                  backgroundColor: persona.online ? 'green' : 'gray',
                  borderRadius: 10, // Círculo online/offline
                },
              ]}
            /> 
          </Text>
          <Text style={styles.sexo}>{persona.genero}</Text>
          <Text style={styles.sexo}>Vive en {persona.localidad}</Text>
          <Text style={styles.sobreMi}>Sobre mi</Text>
          <Text style={styles.descripcion}>{persona.descripcion}</Text>
          {persona.servicios && persona.servicios.length > 0 && (
          <View>
            <Text style={styles.sobreMi}>Mis servicios</Text>
            <View style={styles.perfilServicio}>
              <ModalDropdown
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownList}
                dropdownTextStyle={styles.dropdownItemText}
                options={persona.servicios.map(servicio => servicio.nombre)}
                onSelect={handleServiceSelect}
                defaultValue="Seleccione el servicio"
                alignItems="center"
              />
              {selectedServiceId !== null && (
                <Text>Seleccionaste el servicio con ID: {selectedServiceId}</Text>
              )}
            </View>
            <View style={styles.perfilServicio}>
              <ModalDropdown
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownList}
                dropdownTextStyle={styles.dropdownItemText}
                options={persona.servicios.map(servicio => servicio.duracion)}
                onSelect={handleServiceSelect}
                defaultValue="Seleccione la duración"
                alignItems="center"
              />
            </View>
            <View style={styles.perfilServicio}>
              <ModalDropdown
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownList}
                dropdownTextStyle={styles.dropdownItemText}
                options={persona.servicios.map(servicio => servicio.duracion)}
                onSelect={handleServiceSelect}
                defaultValue="Seleccione la disponibilidad"
                alignItems="center"
              />
            </View>
            <View style={styles.perfilServicio}>
              <ModalDropdown
                style={styles.dropdown}
                textStyle={styles.dropdownText}
                dropdownStyle={styles.dropdownList}
                dropdownTextStyle={styles.dropdownItemText}
                options={persona.servicios.map(servicio => servicio.duracion)}
                onSelect={handleServiceSelect}
                defaultValue="Seleccione un medio de encuentro"
                alignItems="center"
              />
            </View>
            <View style={styles.addToCartButton}>
              <Button title="Añadir al carrito" />
              
            </View>
          </View>)}
          <Button
                title="Ver feedback"
                onPress={() => navigation.navigate('PerfilFeedback', { persona })}
                style={styles.buttonStyle}
              />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  addToCartButton: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20, // Espacio adicional en la parte inferior
  },
  imagenContainer: {
    alignItems: 'center',
  },
  profileImagen: {
    width: 560,
    height: 560,
  },
  perfilContainer: {
    flex: 1,
    alignItems: 'left',
  },
  nombre: {
    fontSize: 32,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 20,
  },
  sexo: {
    fontSize: 20,
    fontWeight: 'normal',
    paddingLeft: 20,
    color: '#666666',
  },
  sobreMi: {
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 20,
  },
  descripcion: {
    fontSize: 16,
    fontWeight: 'normal',
    paddingLeft: 20,
    paddingRight: 20,
  },
  dropdown: {
    fontSize: 20,
    width: 500,
    height: 40,
    borderWidth: 0.2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownText: {
    fontSize: 20,
  },
  dropdownList: {
    width: 500, // Ajusta el ancho de la lista desplegable
  },
  dropdownItemText: {
    fontSize: 20, // Ajusta el tamaño del texto en la lista desplegable
    textAlign: 'center',
  },
  perfilServicio: {
    paddingTop: 10,
    alignItems: 'center',
  },
});

export default ProfileScreen;
