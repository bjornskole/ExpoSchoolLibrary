import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function HomeScreen() {
  let val = "hello"
  console.log(val)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 50, fontFamily: 'BalsamiqSans_400Regular'}}>Home!</Text>
      </View>
    );
  }
  export default HomeScreen