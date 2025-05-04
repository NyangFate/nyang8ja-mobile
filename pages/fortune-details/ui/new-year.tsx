import CatImage from '@/assets/images/cat-rolling-a-boll.webp';
import FortuneTitle from '@/pages/fortune-details/ui/fortune-title';
import Divider from '@/shared/ui/divider';
import Header from '@/shared/ui/header';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FortuneCardList from './fortune-card-list';
import FortuneDescription from './fortune-description';

export default function NewYearFortune() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="" onBackPress={() => router.back()} />
      <ScrollView className="flex-1">
        <View className="flex-1 pb-[46px] px-5">
          <FortuneTitle headerText="신년운세" titleText={`2025년,\n나한테 어떤 해가 될까?`} />

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
              descriptionText={`2025년, 그냥 흘러가게 두긴 아깝잖아. 
올해는 뭘 시작하면 좋을지, 돈은 모일지, 사랑은 피어날지, 공부나 일은 좀 잘 풀릴지…솔직히 다들 속으론 궁금하잖아?\n 
사주에선 올해 흐름이 어때 보이는지, 나한텐 어떤 기운이 붙어 있는지 살~짝 엿볼 수 있거든. 
운세라는 게 꼭 믿으라는 건 아니고, 조금이라도 마음이 가는 쪽으로 발 디뎌보게 도와주는 힌트 같은 거지.
              `}
              highlightedText={`올해 나를 도와주는 기운,
피해야 할 타이밍까지 콕 짚어줄게. 궁금하지?`}
            />
          </View>
        </View>

        <Divider />

        <View className="px-5 py-10">
          <FortuneCardList />
        </View>

        <View className="h-20" />
      </ScrollView>

      {/* 하단 버튼 컨테이너 */}
      <View className="absolute bottom-0 left-0 right-0 mb-[30px]">
        {/* 반투명한 오버레이 (버튼 아래쪽만) */}
        <View className="absolute bottom-0 left-0 right-0 h-16 bg-white opacity-70" />

        {/* 버튼 컨테이너 */}
        <View className="px-5 py-8">
          <Pressable
            className="h-[54px] rounded-lg justify-center items-center bg-grey-70"
            onPress={() => router.push('/')}
          >
            <Text className="text-white font-suit-bold text-body2">2025년 내 운세 보러가기</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
