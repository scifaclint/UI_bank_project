const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Home from "./screens/Home";
import WelcomeBack from "./screens/WelcomeBack";
import FaceIdAuthen from "./screens/FaceIdAuthen";
import TransferMainPage from "./screens/TransferMainPage";
import CreateAnAccount from "./screens/CreateAnAccount";
import RecentNotification from "./components/RecentNotification";
import AnimationFaceId from "./components/AnimationFaceId";
import Success from "./modals/Success";
import CameraScreen from "./components/CameraView";
import CreateAccountForms from "./screens/CreateAccountForms";
import DashBoard from "./screens/DashBoard";
import StartScreen from "./screens/StartScreen";
import SplashScreen from "./screens/SplashScreen";
// this is CreateAnAccount

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Failed from "./modals/Failed";
import ReviewPayment from "./modals/ReviewPayment";
import LoginScreen from "./screens/LoginScreen";
import ForgotPassword from "./modals/ForgotPassword";
import BackgroundFaceScan from "./modals/BackgroundFaceScan";
import { CameraView } from "expo-camera";
import BottomBarHome from "./modals/BottomBarHome";
import BackgroundCamera from "./other_screens/BackgroundCamera";
const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "DMSans-Medium": require("./assets/fonts/DMSans-Medium.ttf"),
    "Poppins-ExtraLight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("./assets/fonts/Inter-ExtraBold.ttf"),
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "DMSans-Bold": require("./assets/fonts/DMSans-Bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return <StartScreen></StartScreen>;
};
export default App;
