import { Stack } from 'expo-router';
import React from 'react';
export default function MyLayout() {
  return (
    <Stack>
      <Stack.Screen name="my-page" options={{ headerShown: false }} />
      <Stack.Screen name="saju-info/create-page" options={{ headerShown: false }} />
      <Stack.Screen name="saju-info/edit-page" options={{ headerShown: false }} />
    </Stack>
  );
}
