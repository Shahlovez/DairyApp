import React from 'react';
import { StyleSheet, View, RefreshControl, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Button from '../components/button';
import { ListItem } from '../components/listIem';
import { Storage } from '../utils/storage';

export class Home extends React.Component {
  state = {
    refreshing: false,
    diaries: [],
  };

  componentDidMount() {
    this.onRefresh();
  }

  onRefresh = async () => {
    this.setState({ refreshing: true });
    const diaries = (await Storage.getItem('diaries')) || [];
    this.setState({ diaries });
    this.setState({ refreshing: false });
  };

  addDiaryHandler = (diary) =>
    this.setState((prevState) => ({
      diaries: [...prevState.diaries, diary],
    }));

  itemPressedHandler = (diary) => {
    this.props.navigation.navigate('Diary', {
      diary,
    });
  };

  render() {
    const { diaries } = this.state;
    return (
      <View style={styles.home}>
        <ScrollView
          style={styles.body}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
        >
          {diaries.length ? (
            diaries.map((diary, index) => {
              return (
                <ListItem
                  title={diary.title}
                  subtitle={new Date(diary.created).toDateString()}
                  style={{ borderTopWidth: 1 }}
                  key={diary.created + index + diary.title}
                  onPress={() => this.itemPressedHandler(diary)}
                />
              );
            })
          ) : (
            <View style={styles.placeholdere_container}>
              <Text style={styles.placeholder}>No Diaries Yet!</Text>
            </View>
          )}
        </ScrollView>
        <Button
          title='Add a New Day'
          onPress={() => {
            this.props.navigation.navigate('addDiary', {
              addDiaryHandler: this.addDiaryHandler,
            });
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  placeholdere_container: {
    marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholder: {
    fontSize: 24,
    color: 'lightgrey',
  },
});