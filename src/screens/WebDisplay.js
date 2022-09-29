import React from "react";
import {
  Text,
  Link,
  Input,
  Icon,
  MaterialIcons,
  FlatList,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";

import { Platform, SafeAreaView } from "react-native";
import { WebView } from 'react-native-webview';

// let dataModule = require('../../assets/DrugsArr.js')
// let data = dataModule.drugsArr

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });

export default WebDisplay = ( props ) => {
  let currUrl = props.url
  return (
        <WebView
            source={{ uri: currUrl }}
        />
  );
}