import { Stack } from 'expo-router';
import React from 'react';
export default function AccountLayout() {
  return (
    <Stack initialRouteName="account-page">
      <Stack.Screen name="account-page" options={{ headerShown: false }} />
      <Stack.Screen name="withdrawal-page" options={{ headerShown: false }} />
      <Stack.Screen name="withdrawal-confirm-page" options={{ headerShown: false }} />
    </Stack>
  );
}
