import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Home } from './screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './constants/theme';
import { AddDiary } from './screens/addDiary';
import { Diary } from './screens/diary';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator
            mode='modal'
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name='Stacks' component={Stacks} />
            <Stack.Screen
              name='addDiary'
              component={AddDiary}
              options={{
                title: 'Add Diary',
                headerStyle: {
                  backgroundColor: theme.primary_color,
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

const Stacks = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Diaries',
          headerStyle: {
            backgroundColor: theme.primary_color,
          },
        }}
      />
      <Stack.Screen
        name='Diary'
        component={Diary}
        options={{
          title: 'Diary',
          headerStyle: {
            backgroundColor: theme.primary_color,
          },
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: theme.primary_color,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});