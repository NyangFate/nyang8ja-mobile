import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ErrorScreenProps {
  error?: Error;
  retry?: () => void;
}

export default function ErrorScreen({ error, retry }: ErrorScreenProps) {
  const router = useRouter();

  const handleGoHome = () => {
    router.replace('/');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center justify-center flex-1 px-5 bg-white">
        <View className="items-center justify-center">
          <Image
            source={SurprisedCatWithPacifierImage}
            style={{ width: 180, height: 180 }}
            className="mb-8"
            accessibilityLabel="놀란 고양이 이미지"
          />

          <Text
            className="mb-3 text-center text-headline1 font-suit-bold text-grey-90"
            accessibilityRole="header"
          >
            오류가 발생했어요
          </Text>
          <Text
            className="mb-2 text-center text-body3 font-suit-regular text-grey-50"
            accessibilityLabel="오류 설명 메시지"
          >
            일시적인 오류가 발생했어요{'\n'}
            문제가 반복되면 문의해 주세요
          </Text>

          {error?.message && (
            <Text
              className="mb-6 text-center text-body4 font-suit-regular text-grey-50"
              accessibilityLabel="상세 오류 메시지"
            >
              {error.message}
            </Text>
          )}

          <View className="justify-center">
            <Pressable
              className="h-[54px] px-6 rounded-lg bg-grey-90 justify-center items-center"
              onPress={handleGoHome}
              accessibilityLabel="홈으로 돌아가기 버튼"
              accessibilityRole="button"
            >
              <Text className="text-white text-subhead3 font-suit-bold">홈으로 돌아가기</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
