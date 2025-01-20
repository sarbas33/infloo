import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { normalize } from '../../../utils/utils';

interface TabNavigationProps {
  activeTab: 'Explore' | 'Events';
  setActiveTab: (tab: 'Explore' | 'Events') => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      {/* Continuous Line */}
      <View style={styles.lineContainer}>
        <View style={styles.continuousLine} />
        <View
          style={[
            styles.activeIndicator,
            activeTab === 'Explore' ? styles.activeExplore : styles.activeEvents,
          ]}
        />
      </View>

      {/* Tabs */}
      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab('Explore')}>
        <Text style={[styles.tabText, activeTab === 'Explore' && styles.activeTabText]}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab('Events')}>
        <Text style={[styles.tabText, activeTab === 'Events' && styles.activeTabText]}>Events</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: normalize(5),
    marginTop: normalize(5),
    elevation: normalize(3),
    position: 'relative', // For positioning the line
  },
  tab: {
    //paddingVertical: normalize(10),
    width: '45%',
    alignItems: 'center',
  },
  tabText: {
    fontSize: normalize(16),
    lineHeight: normalize(24),
    fontFamily: 'Poppins-Medium',
    color: '#000',
    textAlign: 'center',
  },
  activeTabText: {
    color: '#222222',
  },
  lineContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: normalize(2),
    alignItems: 'center'
  },
  continuousLine: {
    backgroundColor: '#f0f0f0', // Default line color
    height: '100%',
    width: '94%',
  },
  activeIndicator: {
    position: 'absolute',
    bottom: 0,
    height: '100%',
    backgroundColor: '#222222',
    marginHorizontal: '3%',
    width: '47%', // Half the width for two tabs
  },
  activeExplore: {
    left: 0,
  },
  activeEvents: {
    right: 0,
  },
});

export default TabNavigation;
