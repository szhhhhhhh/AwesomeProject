/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, useColorScheme, StyleSheet, Text} from 'react-native';
import WebView from 'react-native-webview';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={backgroundStyle}>
      <Text>1234691</Text>
      <WebView
        source={{
          uri: 'https://shetuan.zjer.cn/micro/app/internetSchool/home',
        }}
        style={{
          height: 300,
          marginTop: 20,
        }}
      />
      <Text>12346</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    height: 300,
  },
});

export default App;
