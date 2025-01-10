import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';

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
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
});

export default CategoryIcons;
