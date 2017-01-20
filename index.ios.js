/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { AppRegistry, View, Text, StyleSheet } from 'react-native';

import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: 'rgba(240, 240, 240, 1)',
    flex: 1
  }
})

const App = () => {
  return (
    <View style={styles.viewStyle}>
      <Header title='Taylor Swift'/>
      <AlbumList />
    </View>

  );
}

AppRegistry.registerComponent('albums', () => App);
