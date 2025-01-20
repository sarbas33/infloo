import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native';
import { normalize } from '../../../utils/utils';

const categories = [
  { icon: require('../assets/icons/technology.png'), label: 'Technology' },
  { icon: require('../assets/icons/travel.png'), label: 'Travel' },
  { icon: require('../assets/icons/food.png'), label: 'Food' },
  { icon: require('../assets/icons/marketing.png'), label: 'Marketing' },
  { icon: require('../assets/icons/technology.png'), label: 'Technology' },
  { icon: require('../assets/icons/travel.png'), label: 'Travel' },
  { icon: require('../assets/icons/food.png'), label: 'Food' },
  { icon: require('../assets/icons/marketing.png'), label: 'Marketing' },
];

const CategoryIcons: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={styles.iconContainer}>
            <View style={styles.rectangle}>
              <Image source={item.icon} style={styles.icon} />
            </View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: normalize(100), // Fixed height for the entire component
    justifyContent: 'center', // Center-align the scrollable content vertically
    backgroundColor: '#fff', // Optional: Add a background color
    paddingHorizontal: normalize(10),
    //paddingVertical: normalize(15),
  },
  scrollContainer: {
    alignItems: 'center', // Ensure items are vertically aligned
  },
  iconContainer: {
    alignItems: 'center',
    marginRight: normalize(15), // Spacing between categories
  },
  rectangle: {
    width: normalize(60),
    height: normalize(60),
    justifyContent: 'center',
    alignItems: 'center',
    //borderTopLeftRadius: normalize(12),
    //borderBottomRightRadius: normalize(12),
    //borderTopRightRadius: 0,
    //borderBottomLeftRadius: 0,
    //borderColor: 'black',
    borderRadius: normalize(30),
    backgroundColor: '#f0f0f0',
    //borderWidth: normalize(2),
  },
  icon: {
    width: normalize(30),
    height: normalize(30),
    resizeMode: 'contain',
  },
  label: {
    marginTop: normalize(5),
    fontSize: normalize(12),
    color: '#464646',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});

export default CategoryIcons;
