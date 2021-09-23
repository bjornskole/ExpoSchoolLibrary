import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


function HomeScreen() {
  let val = "hello"
  console.log(val)
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.fontOne}>Home!</Text>
        <Text style={styles.fontTwo}>Home!</Text>
        <Text style={styles.fontThree}>Home!</Text>
        <Text style={styles.fontFour}>Home!</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    fontOne: {
      fontFamily: 'BalsamiqSans_400Regular',
      fontSize: 40,
    },
    fontTwo: {
      fontFamily: "SourceSansPro_400Regular_Italic",
      fontSize: 40,
    },
    fontThree: {
      fontFamily: "SourceSansPro_700Bold",
      fontSize: 40,
    },
    fontFour:{
      fontFamily: "SourceSansPro_400Regular_Italic",
      fontSize: 40,
    }
     });
  export default HomeScreen