import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CountryPicker, { Country } from 'react-native-country-picker-modal';

interface CountryCodePickerProps {
  countryCode: string;
  callingCode: string;
  onSelect: (countryCode: string, callingCode: string) => void;
}

const CountryCodePicker: React.FC<CountryCodePickerProps> = ({ countryCode, callingCode, onSelect }) => {
  const [isPickerVisible, setIsPickerVisible] = useState<boolean>(false);

  const handleSelect = (selectedCountry: Country) => {
    const selectedCountryCode = selectedCountry.cca2;
    const selectedCallingCode = `+${selectedCountry.callingCode}`;
    onSelect(selectedCountryCode, selectedCallingCode);
    setIsPickerVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        style={styles.pickerContainer}
        onPress={() => setIsPickerVisible(true)}
      >
        <CountryPicker
          countryCode={countryCode}
          withFlag={true}
          withCallingCode={true}
          withFilter={true}
          withAlphaFilter={true}
          withEmoji={true}
          onSelect={handleSelect}
          visible={isPickerVisible}
          onClose={() => setIsPickerVisible(false)}
        />
        <Text style={styles.callingCodeText}>{callingCode}</Text>
        <Ionicons name="chevron-down" size={16} color="#000" style={styles.icon} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  callingCodeText: {
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    color: '#000',
  },
  icon: {
    marginLeft: 8,
  },
});

export default CountryCodePicker;
