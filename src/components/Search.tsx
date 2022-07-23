import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {icons} from '../asset/icons';
import {Colors} from '../theme/Colors';

interface SearchProps {
  value: string;
  placeholder: string;
  onChangeText: (value: string) => void;
  renderButton: any;
}

const Search: React.FC<SearchProps> = ({
  value,
  placeholder,
  onChangeText,
  renderButton,
}) => {
  return (
    <View style={styles.container}>
      <Image source={icons.ic_search} style={styles.icon} />
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        style={styles.input}
      />
      {renderButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    padding: 5,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: Colors.white,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  input: {
    flex: 1,
  },
});

export default Search;
