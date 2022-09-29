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
  Modal,
  Button,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";

// import NativeBaseIcon from "./components/NativeBaseIcon";
import { Platform, Pressable, SafeAreaView } from "react-native";
import { useState } from "react";
// import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';

// import DrugsArr.drugsArr from '../assets/DrugsArr.js'

let dataModule = require('../../assets/DrugsArr.js')
let data = dataModule.drugsArr

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });

export default function DrugsListPopup() {
  const [showModal, setShowModal] = useState(false);
  const [modalId, setModalId] = useState(0);

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


        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxHeight="450px" maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>{data[modalId].drugName}</Modal.Header>
          <Modal.Body>
            <Text>{data[modalId].drugPh1}</Text>
            <Text>{data[modalId].drugPh2}</Text>
            <Text>{data[modalId].drugPh3}</Text>
            <Text>{data[modalId].drugPh4}</Text>
            <Text>{data[modalId].drugPh5}</Text>
            <Text>{data[modalId].drugPh6}</Text>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={1}>
              <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
              }}>Ok
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>




        <FlatList data={data} renderItem={({ item }) => <Box borderBottomWidth="1" _dark={{
          borderColor: "gray.600"
          }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <Pressable onPress={()=> {setShowModal(true); setModalId(item.drugId)}}>
              <HStack space={1} justifyContent="space-between">
              <VStack>
                <Text _dark={{
                  color: "warmGray.50"
                  }} color="coolGray.800" bold>
                  {item.drugName}
                </Text>
              </VStack>
              </HStack>
              </Pressable>
        </Box>} keyExtractor={item => item.drugName} />
    </Box>;
      </Center>
   
  );
}