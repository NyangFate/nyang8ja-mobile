import { Stack } from 'expo-router';
import React from 'react';
export default function AccountLayout() {
  return <Stack initialRouteName="account-page" screenOptions={{ headerShown: false }} />;
}
