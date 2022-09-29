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

// import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform, SafeAreaView } from "react-native";
// import { useState } from "react";
// import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

// import DrugsArr.drugsArr from '../assets/DrugsArr.js'

let dataModule = require('../../assets/DrugsArr.js')
let data = dataModule.drugsArr

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });

export default function DrugsList() {
  return (
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        // px={4}
        // flex={1}
      >
        <Box width="full" marginTop={6}>
      <Heading fontSize="xl" p="4" pb="3">
         Drugs List
      </Heading>
      <FlatList data={data} renderItem={({ item }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={1} justifyContent="space-between">
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  {item.drugName}
                </Text>
              </VStack>
            </HStack>
          </Box>} keyExtractor={item => item.drugName} />
    </Box>;
      </Center>
   
  );
}