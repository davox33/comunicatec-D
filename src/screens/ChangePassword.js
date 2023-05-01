import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const NewPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const handleConfirm = () => {
    if (password !== confirmPassword) {
      // Show error message
      alert('Las contraseñas no coinciden');
    } else {
      // Submit new password
      alert('Contraseña actualizada!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nueva Contraseña</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.visibilityBtn} onPress={handlePasswordVisibility}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirmar Contraseña"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.visibilityBtn} onPress={handleConfirmPasswordVisibility}>
          <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.confirmBtn} onPress={handleConfirm}>
        <Text style={styles.confirmBtnText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10
  },
  input: {
    flex: 1,
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc'
  },
  visibilityBtn: {
    padding: 10
  },
  confirmBtn: {
    backgroundColor: 'blue',
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30
  },
  confirmBtnText: {
    color: '#fff',
    fontSize: 18
  }
});

export default NewPasswordScreen;
