import React from 'react';
import { View, StyleSheet, Image, Dimensions, PixelRatio } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { normalize } from '../../../utils/utils';

const { width } = Dimensions.get('window');
const outerMostCircleRadius = normalize(((width * 0.8) / 2) - 2);
const outerCircleRadius = normalize(((width * 0.5) / 2) - 2);

const calculatePosition = (radius, angle, size) => {
  const bottom = radius * Math.sin((angle * Math.PI) / 180) - normalize(size / 2);
  const left = radius * Math.cos((angle * Math.PI) / 180) - normalize(size / 2);
  return { bottom, left };
};

const CircularNetworkDiagram = () => {
  return (
    <View style={styles.circleContainer}>
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
        <Image source={require('../../../assets/images/Infloo.png')} style={styles.centerImage} />
      </View>

      <View style={styles.profileImages}>
        <Image source={require('../../../assets/images/avatar1.png')} style={[styles.profileImage, styles.profilePosition1]} />
        <Image source={require('../../../assets/images/avatar2.png')} style={[styles.profileImageSmall, styles.profilePosition2]} />
        <Image source={require('../../../assets/images/avatar3.png')} style={[styles.profileImage, styles.profilePosition3]} />
        <Image source={require('../../../assets/images/avatar4.png')} style={[styles.profileImage, styles.profilePosition4]} />
        <Image source={require('../../../assets/images/avatar5.png')} style={[styles.profileImageSmall, styles.profilePosition5]} />
        <Image source={require('../../../assets/images/avatar6.png')} style={[styles.profileImageSmall, styles.profilePosition6]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: normalize(40),
    position: 'absolute',
    top: width * 0.55,
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
    //top: width / 2,
  },
  profilePosition1: calculatePosition(outerCircleRadius, 40, 60),
  profilePosition2: calculatePosition(outerCircleRadius, 220, 30),
  profilePosition3: calculatePosition(outerMostCircleRadius, 325, 60),
  profilePosition4: calculatePosition(outerMostCircleRadius, 120, 60),
  profilePosition5: calculatePosition(outerMostCircleRadius, 80, 30),
  profilePosition6: calculatePosition(outerMostCircleRadius, 260, 30),
});

export default CircularNetworkDiagram;