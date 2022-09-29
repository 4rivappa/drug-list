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

let dataModule = require('../../assets/DrugsArr.js')
let data = dataModule.drugsArr

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });

export default DrugInfo = ( props ) => {
  return (
    <Box>
        <Heading>{data[props.id].drugName}</Heading>
        <Text>{data[props.id].drugPh1}</Text>
        <Text>{data[props.id].drugPh2}</Text>
        <Text>{data[props.id].drugPh3}</Text>
        <Text>{data[props.id].drugPh4}</Text>
        <Text>{data[props.id].drugPh5}</Text>
        <Text>{data[props.id].drugPh6}</Text>
    </Box>
  );
}