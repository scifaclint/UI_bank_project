import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { useState } from "react";
import { CameraView, useCameraPermissions } from "expo-camera";

function BackgroundCamera({ type }) {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();
  if (!permission) {
    // Camera permissions are still loading.
    // record video not
    return <View />;
  }
  if (!permission.granted) {
    // Camera not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to Use the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
if (type == "payment"){
  return (
    <View
    //camera implementations
    >
      <View style={styles.cameraContainer}>
        <View style={styles.cameraWrapper}>
          <CameraView style={styles.camera} facing={facing}></CameraView>
        </View>
      </View>
    </View>
  );
}
if (type == "login"){
    return (
      // logic and api stuffs here 
      
      <View
      //camera implementations
      >
        <View style={styles.cameraContainer}>
          <View style={styles.cameraWrapper}>
            <CameraView style={styles.camera} facing={facing}></CameraView>
          </View>
        </View>
      </View>
    );
}
}
const styles = StyleSheet.create({
  cameraContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  cameraWrapper: {
    width: 250,
    height: 250,
    borderRadius: 150, //
    overflow: "hidden",
  },
  camera: {
    flex: 1,
  },
});
export default BackgroundCamera;
