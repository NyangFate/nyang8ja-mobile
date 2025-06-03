import ArrowRightIcon from '@/assets/svgs/arrow-right.svg';
import CatIcon from '@/assets/svgs/sunglasses-cat.svg';
import useUser from '@/shared/api/useUser';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

export default function TodayFortuneCard() {
  const { data: user } = useUser();
  const router = useRouter();

  const handlePress = (isLoggedIn: boolean) => {
    if (isLoggedIn) {
      router.navigate('/fortune/result');
    } else {
      router.navigate('/login-page');
    }
  };

  return (
    <Pressable
      onPress={() => handlePress(!!user)}
      className="flex-row items-center justify-between py-4 pl-5 pr-4 bg-grey-00 rounded-2xl"
    >
      <View className="flex-1 gap-[6px] flex-row items-center">
        <CatIcon />
        <View>
          <Text className="text-grey-40 font-suit-bold text-caption">냥도사가 봐주는</Text>
          <Text className="text-grey-90 font-suit-bold text-subhead3">오늘의 운세 보러가기</Text>
        </View>
      </View>

      <ArrowRightIcon width={24} height={24} />
    </Pressable>
  );
}
