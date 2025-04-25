import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function NotFound() {
  const router = useRouter();

  const handleGoHome = () => {
    router.replace('/');
  };

  return (
    <View className="items-center justify-center flex-1 px-5 bg-white">
      <Image
        source={require('@/assets/images/surprised-cat-with-pacifier.webp')}
        className="h-60 w-60"
        contentFit="contain"
      />
      <Text className="mt-6 text-heading2 font-suit-bold text-grey-90">
        페이지를 찾을 수 없어요
      </Text>
      <Text className="mt-2 text-center text-body3 font-suit-regular text-grey-50">
        요청하신 페이지가 삭제되었거나{'\n'}
        일시적으로 사용이 중단되었어요
      </Text>
      <TouchableOpacity
        className="px-6 py-3 mt-8 rounded-full bg-primary-03"
        onPress={handleGoHome}
      >
        <Text className="text-white text-body2 font-suit-bold">홈으로 돌아가기</Text>
      </TouchableOpacity>
    </View>
  );
}
