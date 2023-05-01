import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Registro = ({ navigation }) => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [aceptarTerminos, setAceptarTerminos] = useState(false);

  const handleRegistro = () => {
    // Lógica de registro aquí
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/logo.jpg')}
        style={styles.logo}
      />
      <TextInput
        style={styles.input}
        onChangeText={setNombre}
        value={nombre}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Correo"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setAceptarTerminos(!aceptarTerminos)}
        >
          {aceptarTerminos ? (
            <Text style={styles.checkmark}>&#10003;</Text>
          ) : null}
        </TouchableOpacity>
        <Text style={styles.label}>Acepto los Términos y Condiciones</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, !aceptarTerminos && styles.disabledButton]}
        onPress={handleRegistro}
        disabled={!aceptarTerminos}
      >
        <Text style={styles.buttonText}>Confirmar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        
      >
        <Text style={styles.buttonText} >Regresar</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Registro;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  input: {
    width: '80%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 3,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    fontSize: 16,
    color: '#fff',
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#007aff',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
