import ChevronRightIcon from '@/assets/svgs/chevron-right.svg';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function InfoCard() {
  const router = useRouter();

  const user = {};

  return (
    <View className="px-5 my-[12px]">
      <Pressable onPress={() => router.navigate('/login-page')}>
        <View className="flex-row items-center justify-between py-4 pl-5 pr-4 bg-grey-00 rounded-xl">
          <View className="gap-[2px]">
            <Text className="text-headline1 text-grey-90 font-suit-bold">로그인하기</Text>
            <Text className="text-body1 font-suit-regular text-grey-70">
              로그인하고 맞춤 결과를 만나봐요
            </Text>
          </View>

          <ChevronRightIcon width={24} height={24} />
        </View>
      </Pressable>
    </View>
  );
}
