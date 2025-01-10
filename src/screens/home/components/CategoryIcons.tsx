import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { normalize } from '../../../utils/utils';

const categories = [
  { icon: require('../assets/icons/technology.png'), label: 'Technology' },
  { icon: require('../assets/icons/travel.png'), label: 'Travel' },
  { icon: require('../assets/icons/food.png'), label: 'Food' },
  { icon: require('../assets/icons/marketing.png'), label: 'Marketing' },
];

const CategoryIcons: React.FC = () => {
  return (
    <View style={styles.container}>
      {categories.map((item, index) => (
        <TouchableOpacity key={index} style={styles.iconContainer}>
          <Image source={item.icon} style={styles.icon} />
          <Text style={styles.label}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: normalize(10),
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: normalize(40),
    height: normalize(40),
    resizeMode: 'contain',
  },
  label: {
    marginTop: normalize(5),
    fontSize: normalize(12),
    color: '#333',
  },
});

export default CategoryIcons;
