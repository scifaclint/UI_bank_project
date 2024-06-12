import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";
import LottieView from "lottie-react-native";
import { StatusBar } from "expo-status-bar";
import Failed from "../modals/Failed";
import Success from "../modals/Success";

import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const messaBoxSuccess = "Great Job! Face ID setup finished";

function CameraScreen(props) {
  // implementations
  const [sVisible, setsVisible] = useState(false);
  const [fvisivle, setfVisible] = useState(false);
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  const succeded = () => {
    setsVisible(true);
  };
  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const handleScanComplete = async () => {
    await sleep(7000); // instead of sleep would be respons from backened
    succeded();
  };
  // handle okay button from modal success take user to dashboard

  const handleOkayModal = () => {
    // alert message , navigate to dashboard
    // replace onPress inside alert with a function to navigate to dashboard
    Alert.alert(
      "Successful",
      "Your Account was successully created,you will now be directed to your dasboard"
    ),
      [{ text: "Ok", onPress: () => Alert.dismiss() }];
  };
  // handle failed okay
  const failCapture = () => {
    // logic here
  };
  // cancel scan
  const cancelScan = () => {
    // navigate back to forms create account
  };
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to Use the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  handleScanComplete();
  return (
    <View
      // main containe
      style={styles.container}
    >
      <StatusBar backgroundColor={Color.colorDarkslateblue_200} />
      <View style={styles.displayText}>
        <FontAwesome5
          name="unlock-alt"
          size={24}
          color={Color.colorDarkslateblue_200}
          style={styles.iconlock}
        />
        <Text style={styles.textStyle}>Hold the phone still. Rotate your</Text>
        <Text style={styles.goslow}> Head. Go slow </Text>
        <Text style={[styles.captureall, styles.defaultTextstyle]}>
          Position your face in the circle
        </Text>
      </View>

      <View style={styles.cameraContainer}>
        <View style={styles.cameraWrapper}>
          <CameraView style={styles.camera} facing={facing}></CameraView>
        </View>
      </View>
      <View
        /// container button cancel
        style={styles.buttonCancel}
      >
        <TouchableOpacity onPress={cancelScan}>
          <Text style={styles.textCancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View
        // animation
        style={{
          flex: 1,
          top: hp("15%"),
          position: "absolute",
          margin: 0,
          marginLeft: -20,
        }}
      >
        <LottieView
          source={require("../data/roundSpining.json")}
          autoPlay
          loop
          style={styles.lottie}
        ></LottieView>
      </View>
      <Success
        messagebox={messaBoxSuccess}
        isVisible={sVisible}
        onClose={handleOkayModal}
      />
      <Failed
        isVisible={fvisivle}
        onClose={failCapture}
        messagebox={
          "Face not enrolled. Make sure your face is within the frame"
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: hp("100%"),
    width: wp("100%"),
    backgroundColor: Color.lightPrimaryKeyBackground,
  },
  cameraContainer: {
    top: hp("30%"),
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "20%",
  },
  camera: {
    flex: 1,
  },
  cameraWrapper: {
    width: 250,
    height: 250,
    borderRadius: 150, //
    overflow: "hidden",
  },

  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  displayText: {
    top: hp("10%"),
  },
  textStyle: {
    top: 20,
    width: wp("100%"),
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorDarkslateblue_200,
  },
  iconlock: {
    left: wp("50%"),
  },
  goslow: {
    top: 30,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.interExtraBold,
    color: Color.colorDarkslateblue_200,
  },
  defaultTextstyle: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.interRegular,
    color: Color.colorDarkslateblue_200,
    fontWeight: "400",
  },
  captureall: {
    top: 40,
    textAlign: "center",
  },
  buttonCancel: {
    top: hp("80%"),
    left: wp("5%"),
  },
  textCancel: {
    color: "#248DE2",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "bold",
  },
  lottie: {
    width: 450,
    height: 490,
  },
});

export default CameraScreen;
