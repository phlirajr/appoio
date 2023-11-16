import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import {MaterialIcons} from "@expo/vector-icons"
import React from 'react';
import { Pressable } from 'react-native';

export default function RegisterLayout() {

    const [loaded] = useFonts({
        RalewayBold: require('../../../assets/fonts/Raleway/static/Raleway-Bold.ttf')
      });

      if (!loaded) {
        return null;
      }

  return (
    <Stack screenOptions={{}}>
        <Stack.Screen name= 'index' options={{
            headerTitle: 'Cadastro',
            headerLeft:({}) => 
            <Pressable onPress={()=>router.back()}>
                <MaterialIcons name='arrow-back' size={25} color={'#31AFB4'} style={{marginLeft:45, justifyContent:'center', alignContent:'center'}}/>
            </Pressable>,
            headerTitleStyle:{
                fontSize:25,
                fontFamily:'RalewayBold'
            }
            
         }}/>
        <Stack.Screen name="../app/index"options={{ }} />
    </Stack>
  );
}