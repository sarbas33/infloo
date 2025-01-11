import React, { useRef, useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { normalize } from '../../../utils/utils';

const screenWidth = Dimensions.get('window').width;

interface HorizontalCardProps {
  name: string;
  profession: string;
  avatar: any;
  domainImage: any;
  isFavorite?: boolean;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({ name, profession, avatar, domainImage, isFavorite }) => {
  return (
    <View style={styles.card}>
      <Image source={domainImage} style={styles.domainImage} />
      <View style={styles.content}>
        <Image source={avatar} style={styles.profileImage} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
        <TouchableOpacity style={styles.favoriteButton}>
          <Image
            source={require('../assets/icons/favorite.png')}
            style={[styles.favoriteIcon, isFavorite && { tintColor: 'red' }]}
          />
        </TouchableOpacity>
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
    marginHorizontal: normalize(10),
    overflow: 'hidden',
    elevation: normalize(3),
  },
  domainImage: {
    width: '100%',
    height: normalize(150),
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: normalize(10),
  },
  profileImage: {
    width: normalize(60),
    height: normalize(60),
    borderRadius: normalize(5),
    marginRight: normalize(10),
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  profession: {
    fontSize: normalize(14),
    color: '#666',
  },
  favoriteButton: {
    position: 'absolute',
    right: normalize(10),
    top: '50%',
  },
  favoriteIcon: {
    width: normalize(24),
    height: normalize(24),
    tintColor: '#333',
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
});

export default HorizontalCardList;
