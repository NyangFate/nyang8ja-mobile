import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.replace('/');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center justify-center flex-1 px-5 bg-white">
        <Animated.View className="items-center justify-center" entering={FadeIn.duration(800)}>
          <Image
            source={SurprisedCatWithPacifierImage}
            style={{ width: 180, height: 180 }}
            className="mb-8"
          />

          <Text className="mb-3 text-center text-headline1 font-suit-bold text-grey-90">
            페이지를 찾을 수 없어요
          </Text>
          <Text className="mb-8 text-center text-body3 font-suit-regular text-grey-50">
            요청하신 페이지가 삭제되었거나{'\n'}
            일시적으로 사용이 중단되었어요
          </Text>
          <Pressable
            className="h-[54px] px-6 rounded-lg bg-grey-90 justify-center items-center"
            onPress={handleGoHome}
          >
            <Text className="text-white text-subhead3 font-suit-bold">홈으로 돌아가기</Text>
          </Pressable>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
