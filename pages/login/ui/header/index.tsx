import CloseIcon from '@/assets/svgs/close.svg';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, View } from 'react-native';

export default function Header() {
  const router = useRouter();

  return (
    <View className="flex-row justify-between items-center p-[14px]">
      <View className="w-6" />
      <Pressable onPress={() => router.back()}>
        <CloseIcon width={24} height={24} />
      </Pressable>
    </View>
  );
}
