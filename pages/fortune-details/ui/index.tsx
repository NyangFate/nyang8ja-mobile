import CatImage from '@/assets/images/cat-rolling-a-boll.webp';
import FortuneTitle from '@/pages/fortune-details/ui/fortune-title';
import { convertCategoryToKorean } from '@/pages/fortune-details/utils/categoryConverter';
import Divider from '@/shared/ui/divider';
import Header from '@/shared/ui/header';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import useFortuneDetails from '../api/useFortuneDetails';
import useRequestFortune from '../api/useRequestFortune';
import FortuneCardList from './fortune-card-list';
import FortuneDescription from './fortune-description';

export default function FortuneDetails() {
  const { id } = useLocalSearchParams();
  const { data: fortuneDetails } = useFortuneDetails(Number(id));
  const { mutate: requestFortune } = useRequestFortune();

  if (!fortuneDetails) return null;

  const categoryInKorean = convertCategoryToKorean(fortuneDetails.category);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="" onBackPress={() => router.back()} />
      <ScrollView className="flex-1">
        <View className="flex-1 pb-[46px] px-5">
          <FortuneTitle headerText={categoryInKorean} titleText={fortuneDetails.question} />

          <View className="mx-auto">
            <Image
              source={CatImage}
              className="w-full h-full"
              style={{
                width: 281,
                height: 247,
              }}
            />
          </View>

          <View className="mt-4">
            <FortuneDescription
              descriptionText={fortuneDetails.description}
              highlightedText={fortuneDetails.annotation ?? ''}
            />
          </View>
        </View>

        <Divider />

        <View className="px-5 py-10">
          <FortuneCardList />
        </View>

        <View className="h-24" />
      </ScrollView>

      {/* 하단 버튼 컨테이너 */}
      <View className="absolute bottom-0 left-0 right-0 mb-[30px]">
        {/* 반투명한 오버레이 (버튼 아래쪽만) */}
        <View className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-70" />

        {/* 버튼 컨테이너 */}
        <View className="px-5 py-8">
          <Pressable
            className="h-[54px] rounded-lg justify-center items-center bg-grey-70"
            onPress={async () => {
              requestFortune(Number(id), {
                onSuccess: () => {
                  router.push(`/fortune/result?id=${id}`);
                },
                onError: () => {
                  Toast.show({
                    type: 'error',
                    text1: '오류가 발생했습니다. 다시 시도해주세요.',
                  });
                },
              });
            }}
          >
            <Text className="text-white font-suit-bold text-body2">
              내 {categoryInKorean} 보러가기
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
