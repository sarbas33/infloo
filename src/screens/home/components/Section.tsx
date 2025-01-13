import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HorizontalCardList from './HorizontalCard';
import VerticalCard from './VerticalCard';
import { normalize } from '../../../utils/utils';

interface SectionProps {
  title: string;
  type: 'horizontal' | 'vertical';
}

const Section: React.FC<SectionProps> = ({ title, type }) => {
  const data = [
    {
      name: 'James Carlo',
      profession: 'Video Creator',
      avatar: require('../assets/icons/user.jpg'),
      domainImage: require('../assets/icons/technology.png'),
    },
    {
      name: 'Ashna Jeev',
      profession: 'Brand Creator',
      avatar: require('../assets/icons/user.jpg'),
      domainImage: require('../assets/icons/profilebg.jpg'),
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {type === 'horizontal' ? (
        <HorizontalCardList data={data} />
      ) : (
        <View>
          {data.map((item, index) => (
            <VerticalCard
              key={index}
              name={item.name}
              profession={item.profession}
              avatar={item.avatar}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: normalize(10),
    paddingHorizontal: normalize(10),
  },
  title: {
    fontSize: normalize(14),
    fontFamily: 'Poppins-Bold',
    lineHeight: normalize(21),
    marginBottom: normalize(10),
  },
});

export default Section;
