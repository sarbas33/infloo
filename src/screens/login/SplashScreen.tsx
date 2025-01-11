import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { normalize } from '../../utils/utils';

const { width, height } = Dimensions.get('window');

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/login/networkdiagram.png')}
        style={styles.networkDiagram}
        resizeMode="contain"
      />

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.appTitle}>Uncover Success Where Your Journey Begins</Text>
          <Text style={styles.subtitle}>
            Drive growth with influencers. Elevate your brand through strategic partnerships.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Image
            source={require('../../assets/images/login/loginbutton.png')}
            style={styles.loginButtonImage}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <Text style={styles.signUpText}>
          Don’t have an account? <Text style={styles.signUpLink}>Sign Up</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: normalize(20),
  },
  networkDiagram: {
    width: width * 0.9,
    height: width * 0.9,
    position: 'absolute',
    top: width * 0.2,
    marginBottom: normalize(30),
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(30),
    position: 'absolute',
    top: width + ((height - width) / 4) //- normalize(50),
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: normalize(30),
  },
  appTitle: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '400',
    fontSize: normalize(20),
    lineHeight: normalize(33),
    textAlign: 'center',
    marginBottom: normalize(15),
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: normalize(13),
    lineHeight: normalize(21),
    textAlign: 'center',
    color: '#6b7280',
    paddingHorizontal: '5%',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: normalize(50),
    alignItems: 'center',
    width: '100%',
  },
  button: { 
    borderWidth: 1, 
    borderColor: 'transparent', 
    width: width * 0.9, 
    height: width * 0.14, 
    marginBottom: normalize(10),
  },
  loginButtonImage: {
    width: '100%',
    height: '100%',
    borderRadius: normalize(30),
  },
  signUpText: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: '#6b7280',
  },
  signUpLink: {
    fontFamily: 'Poppins-Bold',
    color: '#1e3a8a',
  },
});

export default SplashScreen;
