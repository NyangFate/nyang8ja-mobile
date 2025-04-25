import ChevronLeftIcon from '@/assets/svgs/chevron-left.svg';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

interface BaseHeaderProps {
  title: string;
  onBackPress: () => void;
}

export default function Header({ title, onBackPress }: BaseHeaderProps) {
  return (
    <View className="flex-row justify-between items-center p-[14px]">
      <Pressable onPress={onBackPress}>
        <ChevronLeftIcon width={24} height={24} />
      </Pressable>
      <Text className="text-subhead3 font-suit-bold text-grey-90">{title}</Text>
      <View className="w-6" />
    </View>
  );
}
