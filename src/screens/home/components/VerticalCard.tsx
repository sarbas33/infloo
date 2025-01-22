import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions } from 'react-native';
import { normalize } from '../../../utils/utils';
import { addFavorites } from '../../../services/profileService';

const screenWidth = Dimensions.get('window').width;

interface VerticalCardProps {
  id: string;
  name: string;
  profession: string;
  avatar: any;
  isFavorite?: boolean;
}

const VerticalCard: React.FC<VerticalCardProps> = ({ id, name, profession, avatar, isFavorite = false }) => {
  const [favoriteState, setFavoriteState] = useState(isFavorite);

  const handleFavoritePress = async () => {
    const newState = !favoriteState; // Reverse the current state
    const success = await addFavorites(id, newState); // Call service method
    if (success) {
      setFavoriteState(newState); // Update state if the request is successful
    } else {
      console.error('Failed to update favorite state.');
    }
  };

  return (
    <View style={styles.card}>
      <Image source={avatar} style={styles.profileImage} />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.profession}>{profession}</Text>
        <TouchableOpacity style={styles.favoriteButton} onPress={handleFavoritePress}>
          <Image
            source={
              favoriteState
                ? require('../assets/icons/favorite_on.jpeg')
                : require('../assets/icons/favorite.png')
            }
            style={[styles.favoriteIcon]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth - normalize(20),
    height: normalize(80),
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    marginBottom: normalize(15),
    flexDirection: 'row',
    alignItems: 'center',
    elevation: normalize(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profileImage: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(30),
    marginRight: normalize(13),
    marginLeft: normalize(15),
  },
  content: {
    flex: 1,
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '600',
    fontSize: normalize(14),
    lineHeight: normalize(21),
    color: '#000',
  },
  profession: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: normalize(10),
    lineHeight: normalize(15),
    color: '#666',
  },
  favoriteButton: {
    position: 'absolute',
    right: normalize(10),
  },
  favoriteIcon: {
    width: normalize(36),
    height: normalize(36),
  },
});

export default VerticalCard;