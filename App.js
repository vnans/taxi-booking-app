import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icone from 'react-native-vector-icons/FontAwesome';
import DestinationSearch from './src/screens/DestinationSearch';
import SearchResults from './src/screens/SearchResults';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content"/>
    <HomeScreen/>
    {/* <SearchResults/> */}
    </>
  );
}
// const App: () => React$Node = () => {
//  return (
//    <StatusBar barStyle="dark-content"/>

//  )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
