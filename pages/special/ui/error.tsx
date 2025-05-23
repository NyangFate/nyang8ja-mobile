import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import { Image } from 'expo-image';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ErrorProps {
  error?: Error;
  retry?: () => void;
}

export default function Error({ error, retry }: ErrorProps) {
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
            앗! 문제가 생겼어요
          </Text>
          <Text
            className="mb-2 text-center text-body3 font-suit-regular text-grey-50"
            accessibilityLabel="오류 설명 메시지"
          >
            네트워크 환경이나 일시적인 문제로{'\n'}이런 상황이 발생했을 수 있어요{'\n\n'}다시
            시도해보시고, 문제가 계속되면{'\n'}문의해 주세요
          </Text>

          {error?.message && (
            <Text
              className="mb-6 text-center text-body4 font-suit-regular text-grey-50"
              accessibilityLabel="상세 오류 메시지"
            >
              {error.message}
            </Text>
          )}

          <View className="flex-row space-x-4">
            {retry && (
              <View className="h-[54px] px-6 rounded-lg bg-grey-90 justify-center items-center">
                <Text className="text-white text-subhead3 font-suit-bold" onPress={retry}>
                  홈으로 돌아가기
                </Text>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
