import React, { useState } from 'react';
import { View, Text, StatusBar, TextInput, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const EditarInformacion = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [rol, setRol] = useState('');

  const handleNombreChange = (value) => {
    setNombre(value);
  }

  const handleCorreoChange = (value) => {
    setCorreo(value);
  }

  const handleRolChange = (value) => {
    setRol(value);
  }

  const handleConfirmarClick = () => {
    // Lógica para confirmar la edición de la información del perfil
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#007AFF" />
      <Text style={styles.title}>Editar Información</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu nombre completo"
          value={nombre}
          onChangeText={handleNombreChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa tu correo electrónico"
          value={correo}
          onChangeText={handleCorreoChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Rol</Text>
        <Picker
          style={styles.input}
          selectedValue={rol}
          onValueChange={handleRolChange}>
          <Picker.Item label="Selecciona un rol" value="" />
          <Picker.Item label="Administrador" value="Administrador" />
          <Picker.Item label="Estudiante" value="Estudiante" />
          <Picker.Item label="Profesor" value="Profesor" />
          <Picker.Item label="Coordinación" value="Coordinación" />
        </Picker>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleConfirmarClick}>
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  inputContainer: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333333',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCCCCC',
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    marginHorizontal: 20,
    marginTop: 20,
    height: 50,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default EditarInformacion;