import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface TabNavigationProps {
  activeTab: 'Explore' | 'Events';
  setActiveTab: (tab: 'Explore' | 'Events') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Explore' && styles.activeTab]}
        onPress={() => setActiveTab('Explore')}>
        <Text style={[styles.tabText, activeTab === 'Explore' && styles.activeTabText]}>Explore</Text>
        {activeTab === 'Explore' && (
          <Svg width="177" height="2" viewBox="0 0 177 2" fill="none">
            <Path d="M0 1L176.5 1" stroke="#0A1F44" />
          </Svg>
        )}
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Events' && styles.activeTab]}
        onPress={() => setActiveTab('Events')}>
        <Text style={[styles.tabText, activeTab === 'Events' && styles.activeTabText]}>Events</Text>
        {activeTab === 'Events' && (
          <Svg width="177" height="2" viewBox="0 0 177 2" fill="none">
            <Path d="M0 1L176.5 1" stroke="#0A1F44" />
          </Svg>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    elevation: 3,
  },
  tab: {
    paddingVertical: 10,
    width: '45%',
    //margin: '2.5%',
    alignItems: 'center',
    //margin: 10,
    borderRadius: 5,
  },
  activeTab: {
    //backgroundColor: '#007bff',
  },
  tabText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center'
  },
});

export default TabNavigation;
