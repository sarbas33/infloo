import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Text,
  Alert,
  Image
} from 'react-native';
import ConfigurableScreen from './components/ConfigurableScreen';
import { normalize } from '../../utils/utils';
import { useNavigation } from '@react-navigation/native';

const CategorySelectionScreen = ({ route }) => {
  const navigation = useNavigation();
  const { userType, phoneNumber, callingCode, email } = route.params;

  // Example categories array
  const categories = [
    { id: 1, name: 'Technology', icon: require('../../assets/icons/technology.png') },
    { id: 2, name: 'Story', icon: require('../../assets/icons/food.png') },
    { id: 7, name: 'Gaming', icon: require('../../assets/icons/food.png') },
    { id: 3, name: 'Education', icon: require('../../assets/icons/food.png') },
    { id: 4, name: 'Food', icon: require('../../assets/icons/food.png') },
    { id: 5, name: 'Entertainment', icon: require('../../assets/icons/food.png') },
    { id: 6, name: 'Travel', icon: require('../../assets/icons/travel.png') },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [numColumns, setNumColumns] = useState(3);

  const handleSelectCategory = (id) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((catId) => catId !== id)
        : [...prevSelected, id]
    );
  };

  const handleContinue = () => {
    if (selectedCategories.length === 0) {
      Alert.alert('Select at least one category');
      console.log(route.params)
    } else {
      navigation.navigate('BrandPayment', {
        userType,
        selectedCategories,
        phoneNumber, callingCode, email
      });
    }
  };

  const renderCategoryItem = ({ item }) => {
    const isSelected = selectedCategories.includes(item.id);
    return (
      <TouchableOpacity
        style={[
          styles.capsule,
          isSelected && styles.selectedCapsule,
        ]}
        onPress={() => handleSelectCategory(item.id)}
      >
        <View style={styles.iconWrapper}>
            <Image source={item.icon} style={{ width: 14, height: 14, marginHorizontal: 0 }} />
        </View>
        <Text style={[styles.capsuleText, isSelected && styles.selectedText]}>
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ConfigurableScreen
      topImage={require('../../assets/images/signup/category.png')}
      title="Select up your category"
      subtitle="Tell us what piques your curiosity and passoins"
      entryComponent={
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.flatList}
        />
      }
      bottomButtonImage={require('../../assets/images/login/continue.png')}
      bottomIndicatorImage={require('../../assets/images/signup/page3.jpg')}
      onBackPress={() => navigation.goBack()}
      onButtonPress={handleContinue}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    alignItems: 'center'
  },
  capsule: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: normalize(22),
    marginRight: normalize(10),
    marginBottom: normalize(20),
    paddingHorizontal: normalize(16),
    borderWidth: normalize(1),
    borderColor: '#0A1F44',
    borderRadius: normalize(22),
    backgroundColor: '#FFFFFF',
  },
  selectedCapsule: {
    borderColor: '#1E3A8A',
    backgroundColor: '#1E3A8A',
  },
  capsuleText: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Regular',
    color: '#0A1F44',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  iconWrapper: {
    marginRight: normalize(5),
  },
});

export default CategorySelectionScreen;
