import React from "react";
import {
  Text,
  Link,
  Input,
  Icon,
  MaterialIcons,
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
// import { Platform } from "react-native";
// import { useState } from "react";
// import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';


const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });

export default function HomeScreen() {
  return (
    <NativeBaseProvider>
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={5} alignItems="center">
          <Heading size="lg">Drug Info</Heading>
          <HStack space={2} alignItems="center">
            <Text>Search for a drug ..!</Text>
          </HStack>
          <VStack w="100%" space={5} alignSelf="center">
            <Heading fontSize="lg">Material</Heading>
            <Input placeholder="Search People & Places" width="100%" borderRadius="4" py="3" px="1" fontSize="14"/>
          </VStack>
          <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}