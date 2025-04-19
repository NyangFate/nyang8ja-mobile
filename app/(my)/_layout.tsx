import { Stack } from 'expo-router';
import React from 'react';
export default function MyLayout() {
  return (
    <Stack initialRouteName="my-page">
      <Stack.Screen name="my-page" options={{ headerShown: false }} />
      <Stack.Screen name="saju-info/create-page" options={{ headerShown: false }} />
      <Stack.Screen name="saju-info/edit-page" options={{ headerShown: false }} />
      <Stack.Screen name="settings/account-page" options={{ headerShown: false }} />
      <Stack.Screen name="settings/notification-page" options={{ headerShown: false }} />
    </Stack>
  );
}
