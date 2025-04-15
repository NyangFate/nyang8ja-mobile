import NyangPaljaTextLogo from '@/assets/images/nyang8ja-text-logo.webp';
import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import CloseIcon from '@/assets/svgs/close.svg';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        {/* 헤더 */}
        <View className="flex-row justify-between items-center p-[14px]">
          <View className="w-6" />
          <Pressable onPress={() => router.back()}>
            <CloseIcon width={24} height={24} />
          </Pressable>
        </View>

        {/* 고양이 일러스트 영역 */}
        <View className="mt-16">
          <View className="items-center justify-center">
            <Image source={SurprisedCatWithPacifierImage} style={{ width: 240, height: 240 }} />
          </View>
          <View className="items-center justify-center mt-4">
            <Image source={NyangPaljaTextLogo} style={{ width: 174, height: 58 }} />
          </View>
        </View>

        {/* 로그인 버튼 */}
        <View className="px-5 gap-3 mt-[60px]">
          <Pressable
            className="flex-row items-center justify-center py-4 bg-[#24292F] rounded-[4px]"
            onPress={() => {}}
          >
            <View className="mr-2" />
            <Text className="font-suit-bold text-[16px] text-white">Apple로 시작하기</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
