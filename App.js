import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Stats from './stats.js';
import Navbar from './navbar.js';
import Footer from './footer.js';

import Header from './header.js';
//import {Route, Redirect, Switch} from 'react-router-dom';

const App = () => {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Navbar />
      <Text></Text>
      <Text></Text>
      <Stats></Stats>
      <Footer></Footer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    alignItems: 'center',
    //justifyContent: "center"
  },
});

export default App;
