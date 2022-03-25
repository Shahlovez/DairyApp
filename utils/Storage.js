import AsyncStorage from '@react-native-community/async-storage';

const setItem = async (key, item) => {
  const res = JSON.stringify(item);
  await AsyncStorage.setItem(key, res);
  return res;
};

const getItem = async (key) => {
  const rawData = await AsyncStorage.getItem(key);
  const item = JSON.parse(rawData);
  return item;
};

export const Storage = { setItem, getItem };