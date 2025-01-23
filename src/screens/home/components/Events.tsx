import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet, Linking } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { normalize } from "../../../utils/utils"; // Assuming normalize function is imported from a utility file
import { useNavigation } from '@react-navigation/native';

const EventCard = ({ name, role, time, content, profile_url, image }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.card} >
      {/* Vertical Line <View style={styles.verticalLine} /> */}

      <View style={styles.contentContainer}>
      <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={profile_url} // Profile image
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.role}>
                {role} • {time}
              </Text>
            </View>
          </View>
          <Image
            source={require('../assets/icons/favorite.png')}
            //source={{ uri: image }}
            style={styles.headerRightImage}
          />
        </View>

        <View>
          <Text style={styles.content} numberOfLines={6}>{content}
          {content.length > 350 && <TouchableOpacity onPress={() => navigation.navigate('GrabTicket', { content })} style={styles.showMoreLink}>
            <Text style={styles.showMore}>...Show more</Text>
          </TouchableOpacity>}
          </Text>
          
          <View>{image && <Image source={image} style={styles.postImage} />}</View>
        </View>
        <View style={styles.border}></View>
        
        <View style={styles.footer}>
          <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('GrabTicket')}>
            <Text style={styles.buttonText}>Grab the ticket</Text>
          </TouchableOpacity>
          <View style={styles.iconContainer}>
            <Icon name="arrow-redo-outline" style={{ marginRight: normalize(5) }} size={14} color="#999999" />
            <Icon
              name="ellipsis-vertical-outline"
              size={14}
              color="#999999"
              style={{ marginLeft: normalize(10) }}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const Events = () => {
  const events = [
    {
      name: "Ezprazo Marlin",
      role: "CEO Declares",
      time: "1h ago",
      content: "Welcome to this remarkable day, a milestone in our journey, as we gather here to celebrate the inauguration of [Event/Organization Name]. Today marks the beginning of a new chapter, filled with promise and potential Our vision has always been to sds sdsds sadsd sdsd sad gjhghjk",
      profile_url: require('../assets/icons/favorite.png'),
      image: require('../assets/icons/car.png'),
    },
    {
      name: "Misino Shilas",
      role: "Leader Production",
      time: "3h ago",
      content: "Welcome to this remarkable day...",
      profile_url: "https://via.placeholder.com/40",
      image: null,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Poppins-Regular",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    margin: normalize(10),
    paddingTop: normalize(15),
    //paddingHorizontal: normalize(5),
    borderRadius: normalize(10),
    borderLeftColor: '#464646',
    position: "relative",
  },
  border: {
    position: 'absolute',
    left: normalize(20),
    top: normalize(5),
    borderLeftColor: '#464646',
    borderLeftWidth: normalize(1),
    width: '100%',
    height: '100%',
    padding: normalize(20),
    opacity: 0.2
  },
  contentContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between", // Space between left and right sides
    marginBottom: normalize(10),
    alignItems: "center", // Align content vertically
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: normalize(40),
    height: normalize(40),
    borderRadius: normalize(20),
    marginRight: normalize(5),
    zIndex: 5,
  },
  headerRightImage: {
    width: normalize(40), // Adjust size as needed
    height: normalize(40), // Adjust size as needed
    borderRadius: normalize(5),
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    fontSize: normalize(14),
    lineHeight: normalize(21),
  },
  role: {
    color: "gray",
    fontSize: normalize(10),
    lineHeight: normalize(15),
    fontFamily: "Poppins-Regular",
  },
  content: {
    fontSize: normalize(12),
    marginLeft: normalize(30),
    lineHeight: normalize(18),
    paddingHorizontal: normalize(5),
    fontFamily: "Poppins-Regular",
    color: '#464646',
    marginBottom: normalize(5),
  },
  showMore: {
    color: '#0A1F44',
    fontSize: normalize(12),
    lineHeight: normalize(18),
    fontFamily: "Poppins-Medium",
    paddingVertical: 0,
    marginVertical: 0,
    height: normalize(13)
    //textAlign: 'right',
  },
  showMoreLink: {
    //right: 0,
    //bottom: normalize(0),
    //position: 'absolute',
    //backgroundColor: 'green',
    paddingVertical: 0,
  },
  postImage: {
    width: 'auto',
    marginLeft: normalize(30),
    marginRight: normalize(20),
    paddingHorizontal: normalize(5),
    height: normalize(150),
    borderRadius: normalize(10),
    marginBottom: normalize(10),
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: normalize(30),
    marginRight: normalize(20),
  },
  smallButton: {
    backgroundColor: "#0A1F44",
    paddingVertical: normalize(6),
    paddingHorizontal: normalize(10),
    borderRadius: normalize(5),
  },
  buttonText: {
    color: "#fff",
    fontSize: normalize(12),
    fontFamily: "Poppins-Medium",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Events;
