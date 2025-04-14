import { useRouter } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';

export default function Header() {
  const router = useRouter();

  return (
    <View className="flex-row justify-between p-2">
      <Button title="뒤로" onPress={() => router.back()} />
      <Text className="text-lg font-bold">마이</Text>
    </View>
  );
}
