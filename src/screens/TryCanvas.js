import React, {useRef, useEffect} from "react";
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

import Canvas, {Image as CImage} from 'react-native-canvas';
// import NativeBaseIcon from "./components/NativeBaseIcon";
import { Image as RNImage } from "react-native";
// import { useState } from "react";
// import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';


const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });

export default function TryCanvas() {
  

  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
        const img1 = new CImage(ref.current)
  img1.src = 'data:image/png;base64,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'
      const ctx = ref.current.getContext('2d');
      img1.addEventListener('load', function(){
        ctx.drawImage(img1, 0, 0, canvas.width, canvas.height)
        const colorData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    
    function brightnessCalc(red, green, blue){ 
        return Math.sqrt( 
            (red*red)*0.299 + 
            (green*green)*0.587 + 
            (blue*blue)*0.114
        )/100;
    }
    
    const brightnessData = [];
    for(let y=0; y<Canvas.height; y++){ 
        let row = [];
        for(let x=0; Canvas.width; x++){ 
            const red = colorData.data[(y*4*colorData.width) + (x*4)];
            const green = colorData.data[(y*4*colorData.width) + (x*4 + 1)];
            const blue = colorData.data[(y*4*colorData.width) + (x*4 + 2)];
            const brightness = brightnessCalc(red, green, blue);
            // const cell = [ 
            //     cellBrightness = brightness + 0.1,
            //     cellColor = 'rgb('+red+','+green+','+blue+')'
            // ]; 
            const cell = [brightness, 'rgb('+red+','+green+','+blue+')'];
            row.push(cell);
        }
        brightnessData.push(row);
    }
    // console.log(brightnessData);

    let particlesArray = [];
    class Particle{ 
        constructor(){ 
            if(Math.random()>0.35){ 
                this.x = Math.random()*canvas.width;
                this.y = 0;
            }else { 
                this.y = Math.random()*canvas.height;
                this.x = 0;
            }
            this.speed = 0;
            this.velocity = Math.random()*1.8 + 0.1;
            this.size = Math.random()*3 + 0.8;
            console.log("Constructor of particle class...")
        }
        update(){ 
            let yRound = Math.floor(this.y);
            let xRound = Math.floor(this.x);
            this.speed = brightnessData[yRound][xRound][0];
            let movement = (2.5 - this.speed)*2 + this.velocity;
            // let movement = this.speed*2 + 1.6 + this.velocity;
            this.y += movement;
            this.x += movement;
            if(this.y >= canvas.height){ 
                this.y = 0;
                this.x = Math.random()*canvas.width;
            }
            if(this.x >= canvas.width){ 
                this.x = 0;
                this.y = Math.random()*canvas.height;
            }
            this.draw(yRound, xRound);
        }
        draw(yRound, xRound){ 
            //ctx.fillStyle = "white";
            ctx.fillStyle = brightnessData[yRound][xRound][1];
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
            ctx.fill();
        }
    }

    function init(){ 
        for(let i=0; i<1000; i++){ 
            particlesArray.push(new Particle);
        }
        console.log("particles creation init...")
    }
    init();
    
    function handleParticles(){ 
        for(let i=0; i<particlesArray.length; i++){ 
            // ctx.fillStyle = 'rgba(0, 0, 0, particlesArray[i].speed/2)';
            particlesArray[i].update();
        }
    }

    function animate(){ 
        // ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 0.09;
        ctx.fillStyle = 'rgb(0, 0, 0)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }
    animate();
      })
    }
  }, [ref]);


  return (
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >

        {/* <Canvas style={{ height: '186px', backgroundColor: 'black' }} ref={ref} /> */}




        <VStack space={5} alignItems="center">
          <Heading size="lg">Drug Info</Heading>
          <HStack space={2} alignItems="center">
            <Text>Search for a drug ..!</Text>
          </HStack>
          <VStack w="100%" space={5} alignSelf="center">
            <Heading fontSize="lg">Material</Heading>
            <Input placeholder="Search People & Places" width="100%" borderRadius="4" py="3" px="1" fontSize="14"/>
          </VStack>
        </VStack>
      </Center>
  );
}
