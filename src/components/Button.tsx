import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {icons} from '../asset/icons';
import {Colors} from '../theme/Colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Image source={icons.arrow_down} style={styles.arrow} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.orange,
  },
  arrow: {
    width: 20,
    height: 20,
    marginLeft: 5,
    tintColor: Colors.orange,
  },
});

export default Button;
