import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions, PixelRatio } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const { width, height } = Dimensions.get('window');
const scale = width / 360;

const normalize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const outerMostCircleRadius = ((width * 0.8) / 2) - 2;
const outerCircleRadius = ((width * 0.5) / 2) - 2;


const SplashScreen = () => {
    
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        {/* Circle SVGs and Logo Overlay */}
        <Svg width={width * 0.9} height={width * 0.9} style={styles.outerMostCircle}>
          <Circle
            cx="50%"
            cy="50%"
            r={outerMostCircleRadius}
            stroke="#2E3A47"
            strokeWidth="2"
            strokeDasharray="18,18"
            fill="none"
          />
        </Svg>
        <Svg width={width * 0.5} height={width * 0.5} style={styles.outerCircle}>
          <Circle
            cx="50%"
            cy="50%"
            r={outerCircleRadius}
            stroke="#2E3A47"
            strokeWidth="2"
            strokeDasharray="18,18"
            fill="none"
          />
        </Svg>
        <Svg width={width * 0.25} height={width * 0.25} style={styles.innerCircle}>
          <Circle cx="50%" cy="50%" r={(width * 0.25) / 2} fill="#0A1F44" />
        </Svg>
        <View style={[styles.innerCircle, styles.logoOverlay]}>
          <Image source={require('../assets/images/Infloo.png')} style={styles.centerImage} />
        </View>
        
      </View>
      <View style={styles.profileImages}>
        <Image source={require('../assets/images/avatar1.png')} style={[styles.profileImage, styles.profilePosition1]} />
        <Image source={require('../assets/images/avatar2.png')} style={[styles.profileImageSmall, styles.profilePosition2]} />
        <Image source={require('../assets/images/avatar3.png')} style={[styles.profileImage, styles.profilePosition3]} />
        <Image source={require('../assets/images/avatar4.png')} style={[styles.profileImage, styles.profilePosition4]} />
        <Image source={require('../assets/images/avatar5.png')} style={[styles.profileImageSmall, styles.profilePosition5]} />
        <Image source={require('../assets/images/avatar6.png')} style={[styles.profileImageSmall, styles.profilePosition6]} />
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Uncover Success Where Your Journey Begins</Text>
          <Text style={styles.subtitle}>
            Drive growth with influencers. Elevate your brand through strategic partnerships.
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login with phone</Text>
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
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(40),
    position: 'absolute',
    top: width * 0.5,
    backgroundColor: 'blue'
  },
  outerMostCircle: {
    position: 'absolute',
  },
  outerCircle: {
    position: 'absolute',
  },
  innerCircle: {
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: (width * 0.4) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  centerImage: {
    width: normalize(68),
    height: normalize(76),
    resizeMode: 'contain',
    position: 'absolute',
  },
  profileImage: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
    position: 'absolute',
  },
  profileImageSmall: {
    width: normalize(30),
    height: normalize(30),
    borderRadius: normalize(15),
    position: 'absolute',
  },
  profileImages: {
    position: 'absolute',
    top: (width / 2),
    backgroundColor: '#662235',
  },
  profilePosition1: {
    bottom: outerCircleRadius * Math.sin((40 * Math.PI) / 180) - normalize(30),
    left: outerCircleRadius * Math.cos((40 * Math.PI) / 180) - normalize(30),
  },
  profilePosition2: {
    bottom: outerCircleRadius * Math.sin((220 * Math.PI) / 180) - normalize(15),
    left: outerCircleRadius * Math.cos((220 * Math.PI) / 180) - normalize(15),
  },
  profilePosition3: {
    bottom: outerMostCircleRadius * Math.sin((325 * Math.PI) / 180) - normalize(30),
    left: outerMostCircleRadius * Math.cos((325 * Math.PI) / 180) - normalize(30),
  },
  profilePosition4: {
    bottom: outerMostCircleRadius * Math.sin((120 * Math.PI) / 180) - normalize(30),
    left: outerMostCircleRadius * Math.cos((120 * Math.PI) / 180) - normalize(30),
  },
  profilePosition5: {
    bottom: outerMostCircleRadius * Math.sin((80 * Math.PI) / 180) - normalize(15),
    left: outerMostCircleRadius * Math.cos((80 * Math.PI) / 180) - normalize(15),
  },
  profilePosition6: {
    bottom: outerMostCircleRadius * Math.sin((260 * Math.PI) / 180) - normalize(15),
    left: outerMostCircleRadius * Math.cos((260 * Math.PI) / 180) - normalize(15),
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: normalize(30),
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: normalize(22),
    lineHeight: normalize(33),
    textAlign: 'center',
    marginBottom: normalize(15),
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontWeight: '400',
    fontSize: normalize(14),
    lineHeight: normalize(21),
    textAlign: 'center',
    color: '#6b7280',
    paddingHorizontal: '5%',
  },
  button: {
    backgroundColor: '#1e3a8a',
    paddingVertical: normalize(15),
    width: '100%',
    borderRadius: normalize(30),
    alignItems: 'center',
    marginBottom: normalize(15),
  },
  buttonText: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: normalize(14),
    lineHeight: normalize(21),
    textAlign: 'center',
    color: '#fff',
  },
  signUpText: {
    fontSize: normalize(14),
    color: '#6b7280',
  },
  signUpLink: {
    color: '#1e3a8a',
    fontWeight: 'bold',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(30),
    position: 'absolute',
    top: width + (height - width) / 4 - normalize(50),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: normalize(50),
    alignItems: 'center',
    width: '100%',
  },
});

export default SplashScreen;
