import { Stack } from 'expo-router';
import React from 'react';

export default function ModalLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="menu"options={{ presentation:'formSheet', animation:'simple_push'}} />
      <Stack.Screen name="teste"options={{ presentation:'card', animation:'slide_from_bottom'}} />



    </Stack>
  );
}