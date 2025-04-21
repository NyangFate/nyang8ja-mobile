import { Stack } from 'expo-router';
import React from 'react';
export default function SajuInfoCreateLayout() {
  return (
    <Stack initialRouteName="create-page">
      <Stack.Screen name="create-page" options={{ headerShown: false }} />
      <Stack.Screen name="name-input-page" options={{ headerShown: false }} />
      <Stack.Screen name="gender-select-page" options={{ headerShown: false }} />
    </Stack>
  );
}
