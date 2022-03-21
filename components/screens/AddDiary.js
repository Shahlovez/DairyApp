import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import Button from '../components/button';
import { Storage } from '../utils/storage';

export const AddDiary = ({ navigation, route }) => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const submit = async () => {
    const created = new Date().getTime();
    const diary = { title, body, created };
    const all_items = (await Storage.getItem('diaries')) || [];
    const updated_diaries = [...all_items, diary];
    await Storage.setItem('diaries', updated_diaries);
    // that stores inside home component state
    route.params.addDiaryHandler(diary);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.title_input}
          placeholder='example'
          onChangeText={setTitle}
          value={title}
        />
      </View>
      <View style={[styles.group, { flex: 1 }]}>
        <Text style={styles.label}>Body</Text>
        <TextInput
          style={[styles.title_input, { height: 300 }]}
          placeholder='example'
          multiline
          onChangeText={setBody}
          value={body}
        />
      </View>
      <Button title='Submit' onPress={submit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  label: {
    fontSize: 24,
    marginLeft: 20,
    marginBottom: 10,
  },
  title_input: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    marginHorizontal: 10,
    borderColor: 'grey',
  },
  group: {
    marginTop: 20,
  },
});