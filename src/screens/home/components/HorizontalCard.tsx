import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { normalize } from '../../../utils/utils';

const screenWidth = Dimensions.get('window').width;

interface HorizontalCardProps {
  name: string;
  profession: string;
  avatar: any;
  domainImage: any;
  location: any;
  description: string;
  numFollowers: string;
  isFavorite?: boolean;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ name, profession, avatar, domainImage, location, description, isFavorite, numFollowers }) => {
  return (
    <View style={styles.card}>
      <Image source={domainImage} style={styles.domainImage} />
      <TouchableOpacity style={styles.favoriteButton}>
          <Image
            source={isFavorite ? require('../assets/icons/technology.png') : require('../assets/icons/favorite.png')}
            style={styles.favoriteIcon}
          />
        </TouchableOpacity>
      <View style={styles.content}>
        <Image source={avatar} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{profession}</Text>
          <Text style={styles.location}>{location}</Text>
          <View style={[styles.line, { width: '100%' }]} />
          <Text style={styles.followers}>{numFollowers} Followers</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

interface HorizontalCardListProps {
  data: HorizontalCardProps[];
}

const HorizontalCardList: React.FC<HorizontalCardListProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: any) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / screenWidth);
    setCurrentIndex(index);
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={data}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        renderItem={({ item }) => <HorizontalCard {...item} />}
      />
      <View style={styles.paginationContainer}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: screenWidth - normalize(20),
    backgroundColor: '#fff',
    borderRadius: normalize(10),
    overflow: 'hidden',
    elevation: normalize(3),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  domainImage: {
    width: '100%',
    height: normalize(75),
  },
  content: {
    //flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: normalize(20),
    marginTop: -normalize(34),
  },
  profileImage: {
    width: normalize(88),
    height: normalize(88),
    borderRadius: normalize(44),
    marginRight: normalize(10),
  },
  textContainer: {
    flex: 1,
    width: normalize(88),
    alignItems: 'center',
  },
  name: {
    fontSize: normalize(12),
    fontFamily: 'Poppins-Medium',
    color: '#464646',
    lineHeight: normalize(18),
  },
  profession: {
    fontSize: normalize(8),
    fontFamily: 'Poppins-Regular',
    lineHeight: normalize(12),
    color: '#666',
  },
  location: {
    fontSize: normalize(8),
    fontFamily: 'Poppins-Regular',
    lineHeight: normalize(12),
    color: '#464646',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#464646',
    marginVertical: normalize(4),
    marginHorizontal: normalize(4),
  },
  followers: {
    fontSize: normalize(11),
    fontFamily: 'Poppins-Medium',
    lineHeight: normalize(18),
    color: '#464646',
  },
  favoriteButton: {
    position: 'absolute',
    right: normalize(10),
    top: normalize(60),
  },
  favoriteIcon: {
    width: normalize(36),
    height: normalize(36),
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: normalize(10),
  },
  dot: {
    width: normalize(8),
    height: normalize(8),
    borderRadius: normalize(4),
    backgroundColor: '#ccc',
    marginHorizontal: normalize(4),
  },
  activeDot: {
    backgroundColor: '#333',
  },
  descriptionContainer: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    width: screenWidth * 0.6,
    padding: normalize(8),
    borderWidth: normalize(1),
    borderRadius: normalize(8),
    borderColor: '#0A1F44',
  },
  description: {
    color: '#000000',
    fontFamily: 'Poppins-Light',
    fontSize: normalize(11),
    lineHeight: normalize(16),
  },
});

export default HorizontalCardList;
