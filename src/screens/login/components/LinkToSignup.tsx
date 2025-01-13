import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LinkToSignup = () => {  
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.touchableWrapper}
      onPress={() => navigation.navigate('UserType')}
    >
      <Text style={styles.signUpLink}>Sign Up</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    touchableWrapper: {
        alignSelf: 'center',
        marginBottom: 0,
        padding: 0,
      },
      signUpLink: {
        fontFamily: 'Poppins-Bold',
        color: '#1e3a8a',
        padding: 0,
      },
});

export default LinkToSignup;
