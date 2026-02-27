import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ContactsScreen = () => {
  return (
    <LinearGradient
      colors={['#0BACE1', '#065E7B']}
      style={styles.container}
    >
      <View style={styles.card}>
        {/* Profile Picture */}
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with your own photo link
          style={styles.avatar}
        />

        {/* Name */}
        <Text style={styles.name}>Juan Dela Cruz</Text>

        {/* Gmail */}
        <Text style={styles.email}>juan.delacruz@gmail.com</Text>

        {/* Role */}
        <Text style={styles.role}>Student - BSCS 3rd Year</Text>
      </View>
    </LinearGradient>
  );
};

export default ContactsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    elevation: 5, // shadow for Android
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#065E7B',
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  role: {
    fontSize: 16,
    color: '#555',
  },
});