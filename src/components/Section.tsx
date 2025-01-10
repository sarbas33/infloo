import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import HorizontalCard from './HorizontalCard';
import VerticalCard from './VerticalCard';

interface SectionProps {
  title: string;
  type: 'horizontal' | 'vertical';
}

const Section: React.FC<SectionProps> = ({ title, type }) => {
  const data = [
    {
      name: 'James Carlo',
      profession: 'Video Creator',
      avatar: require('../assets/icons/user.png'),
      domainImage: require('../assets/icons/technology.png'),
    },
    {
      name: 'Ashna Jeev',
      profession: 'Brand Creator',
      avatar: require('../assets/icons/user.png'),
      domainImage: require('../assets/icons/travel.png'),
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.title}>{title}</Text>
      {type === 'horizontal' ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {data.map((item, index) => (
            <HorizontalCard
              key={index}
              name={item.name}
              profession={item.profession}
              avatar={item.avatar}
              domainImage={item.domainImage}
            />
          ))}
        </ScrollView>
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
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Section;
