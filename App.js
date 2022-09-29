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
import { SafeAreaView, StatusBar } from "react-native";
import { useState } from "react";
// import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

// import HomeScreen from "./src/screens/HomeScreen";
// import DrugsList from "./src/screens/DrugsList";
// import WebDisplay from "./src/screens/WebDisplay";
// import DrugInfo from "./src/screens/DrugInfo";
import DrugsListPopup from "./src/screens/DrugsListPopup";
// import TryCanvas from "./src/screens/TryCanvas";

// import { SafeAreaView } from "react-native-safe-area-context";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);
  var reqId = 0
  return (
    <NativeBaseProvider>
      <SafeAreaView style={{flex: 1, marginTop: StatusBar.currentHeight}}>
    {/* <HomeScreen /> */}
    {/* <DrugsList /> */}
        {/* <WebDisplay url = 'https://www.drugs.com/abilify.html' /> */}
      {/* <DrugInfo id = {reqId} /> */}
      <DrugsListPopup />
      {/* <TryCanvas /> */}
      </SafeAreaView>
    </NativeBaseProvider>

    // <NativeBaseProvider>
    //   <Center
    //     _dark={{ bg: "blueGray.900" }}
    //     _light={{ bg: "blueGray.50" }}
    //     px={4}
    //     flex={1}
    //   >
    //     <VStack space={5} alignItems="center">
    //       {/* <AutocompleteDropdown
    //         clearOnFocus={false}
    //         closeOnBlur={true}
    //         closeOnSubmit={false}
    //         initialValue={{ id: '2' }} // or just '2'
    //         onSelectItem={setSelectedItem}
    //         dataSet={[
    //           { id: '1', title: 'Alpha' },
    //           { id: '2', title: 'Beta' },
    //           { id: '3', title: 'Gamma' },
    //         ]}  
    //       />; */}
    //       {/* <NativeBaseIcon /> */}
    //       <Heading size="lg">Drug Info</Heading>
    //       <HStack space={2} alignItems="center">
    //         {/* <Text>Edit</Text>
    //         <Box
    //           _web={{
    //             _text: {
    //               fontFamily: "monospace",
    //               fontSize: "sm",
    //             },
    //           }}
    //           px={2}
    //           py={1}
    //           _dark={{ bg: "blueGray.800" }}
    //           _light={{ bg: "blueGray.200" }}
    //         >
    //           App.js
    //         </Box> */}
    //         <Text>Search for a drug ..!</Text>
    //       </HStack>
    //       <VStack w="100%" space={5} alignSelf="center">
    //         <Heading fontSize="lg">Material</Heading>
    //         {/* <Input placeholder="Search People & Places" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} InputRightElement={<Icon m="2" mr="3" size="6" color="gray.400" as={<MaterialIcons name="mic" />} />} /> */}
    //         <Input placeholder="Search People & Places" width="100%" borderRadius="4" py="3" px="1" fontSize="14"/>
    //       </VStack>
    //       {/* <Link href="https://docs.nativebase.io" isExternal>
    //         <Text color="primary.500" underline fontSize={"xl"}>
    //           Learn NativeBase
    //         </Text>
    //       </Link> */}
    //       <ToggleDarkMode />
    //     </VStack>
    //   </Center>
    // </NativeBaseProvider>
  );
}

// Color Switch Component
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
