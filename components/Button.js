import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from '../constants/theme';

const Button = ({ title, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.btn, style]}
      activeOpacity={1}
      onPress={onPress}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10,
    borderTopWidth: 1,
    borderColor: '#9673A6',
    backgroundColor: theme.primary_color,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});