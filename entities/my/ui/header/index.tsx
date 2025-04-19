import ChevronLeftIcon from '@/assets/svgs/chevron-left.svg';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function Header() {
  const router = useRouter();

  return (
    <View className="flex-row justify-between items-center p-[14px]">
      <Pressable onPress={() => router.navigate('/')}>
        <ChevronLeftIcon width={24} height={24} />
      </Pressable>
      <Text className="text-subhead3 font-suit-bold text-grey-90">마이</Text>
      <View className="w-6" />
    </View>
  );
}
