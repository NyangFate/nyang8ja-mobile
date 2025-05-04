import { Stack } from 'expo-router';
import React from 'react';
export default function MyLayout() {
  return <Stack initialRouteName="my-page" screenOptions={{ headerShown: false }} />;
}
