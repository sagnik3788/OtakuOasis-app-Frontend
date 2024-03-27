import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/user/HomeScreen';
import Routes from "./routes/Routes";
console.reportErrorsAsExceptions = false;
export default function App() {
  return (
    // <View style={styles.container}>
    //   <HomeScreen/>
    //   <StatusBar style="auto"/>
    // </View>
    <Routes />
  );
}



