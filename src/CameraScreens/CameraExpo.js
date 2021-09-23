import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';


function CameraExpo() {
  const [openCamera, setOpenCamera] = useState(false)
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.mainContainer}>
    {openCamera === true ? 
    <View  style={styles.container}>
    <Camera style={styles.camera} type={type}>
    <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <MaterialIcons name="flip-camera-ios" size={33} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setOpenCamera(false)}>
            <Text style={styles.text}>close</Text>
          </TouchableOpacity>
        </View>
      </Camera>
      </View>
       : <View style={styles.cameraBtn}>
        <TouchableOpacity onPress={() => setOpenCamera(true)}>
          <Text style={styles.text}>Camera</Text>
        </TouchableOpacity>
        </View>}
        </View>
  );
}

const styles = StyleSheet.create({ 
  mainContainer: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
container: {
  height: '100%',
  width: '100%',
    // justifyContent: 'center',
},
cameraBtn: {
  alignItems: 'center',
},
camera: {
    height: '100%',
    // margin: '5%'
},
buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: '8%'
},
subline: {
    alignItems: 'center',
},
text: {
    fontSize: 40,
    fontFamily: 'BalsamiqSans_400Regular'
}
 }); 
 export default CameraExpo;