import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../theme/Colors';

interface RadioProps {
  data: string[];
  value: string;
  onChangeValue: (value: string) => void;
}

const Radio: React.FC<RadioProps> = ({data, value, onChangeValue}) => {
  const onChange = (value: string) => {
    onChangeValue(value);
  };

  return (
    <View>
      {data.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.container}
          onPress={() => onChange(item)}>
          <View style={styles.outline}>
            {value === item && <View style={styles.circle}></View>}
          </View>
          <Text style={styles.item}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  outline: {
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.orange,
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.orange,
  },
  item: {
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default Radio;
