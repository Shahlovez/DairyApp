import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Diary = ({ route }) => (
  <View style={{ flex: 1 }}>
    <View style={styles.date_container}>
      <Text style={{ color: 'grey' }}>
        {new Date(route.params.diary.created).toDateString()}
      </Text>
    </View>
    <View style={styles.container}>
      <Text style={{ fontSize: 32 }}>{route.params.diary.title}</Text>
      <Text style={styles.body}>{route.params.diary.body}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  date_container: {
    alignItems: 'flex-end',
    padding: 20,
  },
  body: {
    marginTop: 40,
    fontSize: 24,
    paddingHorizontal: 10,
  },
});