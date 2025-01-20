import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { normalize } from '../../../utils/utils';

const TopBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../assets/icons/hamburger.png')} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.circleIconContainer}>
          <Image source={require('../assets/icons/notification.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleIconContainer && styles.iconBG}>
          <Image source={require('../assets/icons/search.png')} style={styles.circleIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(10),
    backgroundColor: '#fff',
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
    resizeMode: 'contain',
  },
  circleIconContainer: {
    width: normalize(36),
    height: normalize(36),
    borderRadius: normalize(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBG: {
    backgroundColor: '#194DAA',
    width: normalize(36),
    height: normalize(36),
    borderRadius: normalize(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleIcon: {
    width: normalize(24),
    height: normalize(24),
    borderRadius: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: normalize(10),
  },
});

export default TopBar;
