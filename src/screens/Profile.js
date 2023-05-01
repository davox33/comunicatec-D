import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Image } from 'react-native';

const Profile = () => {

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#0069c0" barStyle="light-content" />

      <View style={styles.userContainer}>
        <Image source={require('./assets/user-icon.png')} style={styles.userIcon} />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Nombre:</Text>
        <Text style={[styles.infoText, styles.bold]}>Juan Pérez</Text>
        <Text style={styles.infoText}>Correo:</Text>
        <Text style={[styles.infoText, styles.bold]}>juanperez@gmail.com</Text>
        <Text style={styles.infoText}>Rol:</Text>
        <Text style={[styles.infoText, styles.bold]}>Administrador</Text>
      </View>

      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar información</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  userContainer: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  userIcon: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
  infoContainer: {
    marginBottom: 30,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  infoText: {
    fontSize: 18,
    marginVertical: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  editButton: {
    backgroundColor: '#0069c0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;
