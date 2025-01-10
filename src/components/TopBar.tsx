import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const TopBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require('../assets/icons/hamburger.png')} style={styles.icon} />
      </TouchableOpacity>
      <View style={styles.rightIcons}>
        <TouchableOpacity>
          <Image source={require('../assets/icons/notification.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/icons/search.png')} style={styles.circleIconContainer} />
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
    padding: 10,
    backgroundColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  circleIconContainer: {
    backgroundColor: 'blue',
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightIcons: {
    flexDirection: 'row',
    gap: 10,
  },
});

export default TopBar;
