import { router } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NewYearFortune() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* 상단 타이틀 */}
        <View className="px-5 pt-4">
          <Text className="text-primary-03 font-suit-bold text-caption">신년운세</Text>
          <Text className="mt-2 font-suit-bold text-headline2 text-grey-90">
            2025년,{'\n'}
            나한테 어떤 해가 될까?
          </Text>
        </View>
        {/* 설명 섹션 */}
        <View className="px-5 mt-4">
          <Text className="leading-6 font-suit-regular text-body3 text-grey-60">
            2025년, 그냥 흘러가게 두긴 아깝잖아.{'\n'}
            올해는 뭘 시작하면 좋을지, 돈은 모일지, 사랑은 피어날지, 공부나 일은 좀 잘 풀릴지…솔직히
            다들 속으론 궁금하잖아?{'\n'}
            {'\n'}
            사주에선 올해 흐름이 어때 보이는지, 나한텐 어떤 기운이 붙어 있는지 살~짝 엿볼 수 있거든.
            {'\n'}
            운세라는 게 꼭 믿으라는 건 아니고, 조금이라도 마음이 가는 쪽으로 발 디뎌보게 도와주는
            힌트 같은 거지.{'\n'}
            올해 나를 도와주는 기운,{'\n'}
            피해야 할 타이밍까지 콕 짚어줄게. 궁금하지?
          </Text>
        </View>
        {/* 인기있는 무료 사주 섹션 */}
        <View className="px-5 mt-10">
          <Text className="font-suit-bold text-subhead1 text-grey-70">
            지금 인기 있는 무료 사주 더보기
          </Text>

          <View className="mt-4 space-y-4">
            {/* 첫 번째 카드 */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="relative items-center justify-center w-16 h-16 overflow-hidden border-2 rounded-md bg-primary-02 border-primary-01">
                  {/* 장식 원들 (동심원) */}
                  <View
                    className="absolute w-[60%] h-[60%] rounded-full bg-primary-03"
                    style={{ opacity: 0.7 }}
                  />
                  <View className="absolute w-[48%] h-[48%] rounded-full bg-primary-02" />
                  <View className="absolute w-[36%] h-[36%] rounded-full bg-primary-01" />
                  <View className="absolute w-[24%] h-[24%] rounded-full bg-primary-00" />
                </View>
                <View className="ml-3">
                  <Text className="font-suit-bold text-subhead3 text-grey-90">
                    오늘 그 사람이 날 생각하고 있을까?
                  </Text>
                </View>
              </View>
              {/* 화살표 대체 X 표시 */}
              <View className="items-center justify-center w-6 h-6">
                <View className="w-5 h-0.5 bg-grey-20 rotate-45 absolute"></View>
                <View className="w-5 h-0.5 bg-grey-20 -rotate-45 absolute"></View>
              </View>
            </View>

            {/* 두 번째 카드 */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="relative items-center justify-center w-16 h-16 overflow-hidden border-2 rounded-md bg-primary-02 border-primary-01">
                  {/* 장식 원들 (동심원) */}
                  <View
                    className="absolute w-[60%] h-[60%] rounded-full bg-primary-03"
                    style={{ opacity: 0.7 }}
                  />
                  <View className="absolute w-[48%] h-[48%] rounded-full bg-primary-02" />
                  <View className="absolute w-[36%] h-[36%] rounded-full bg-primary-01" />
                  <View className="absolute w-[24%] h-[24%] rounded-full bg-primary-00" />
                </View>
                <View className="ml-3">
                  <Text className="font-suit-bold text-subhead3 text-grey-90">
                    내 팔자에 숨겨진 특별한 연애운이 있을까?
                  </Text>
                </View>
              </View>
              {/* 화살표 대체 X 표시 */}
              <View className="items-center justify-center w-6 h-6">
                <View className="w-5 h-0.5 bg-grey-20 rotate-45 absolute"></View>
                <View className="w-5 h-0.5 bg-grey-20 -rotate-45 absolute"></View>
              </View>
            </View>

            {/* 세 번째 카드 (자물쇠 표시) */}
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="items-center justify-center w-10 h-10 mr-2">
                  {/* 자물쇠 아이콘 표현 */}
                  <View className="w-6 h-6 border border-yellow-400 rounded-full"></View>
                  <View className="absolute w-4 h-4 bg-yellow-400 rounded-sm bottom-1"></View>
                </View>
                <View>
                  <Text className="font-suit-bold text-subhead3 text-grey-90">
                    20년 뒤, 옆에 누가 있을까?
                  </Text>
                </View>
              </View>
              {/* 화살표 대체 X 표시 */}
              <View className="items-center justify-center w-6 h-6">
                <View className="w-5 h-0.5 bg-grey-20 rotate-45 absolute"></View>
                <View className="w-5 h-0.5 bg-grey-20 -rotate-45 absolute"></View>
              </View>
            </View>
          </View>
        </View>
        {/* 고양이 일러스트 영역 (간소화된 표현) */}
        <View className="items-center mt-12">
          <View className="flex items-center justify-center w-48 h-48 rounded-full bg-grey-00">
            <View className="rounded-full w-36 h-36 bg-primary-01">
              <View
                className="absolute right-0 w-8 h-12 rounded-full bg-primary-02 top-4"
                style={{ transform: [{ rotate: '30deg' }] }}
              ></View>
              <View
                className="absolute left-0 w-8 h-12 rounded-full bg-primary-02 top-4"
                style={{ transform: [{ rotate: '-30deg' }] }}
              ></View>
              <View className="absolute bottom-0 w-24 h-24 rounded-full bg-primary-03 left-6"></View>
            </View>
          </View>
        </View>
        {/* 하단 여백 */}
        <View className="h-32"></View>
      </ScrollView>

      {/* 하단 그라데이션 배경과 버튼 컨테이너 */}
      <View className="absolute bottom-0 left-0 right-0 px-5 pt-10 pb-5 bg-gradient-to-t from-white to-transparent">
        <Pressable
          className="bg-primary-03 h-[54px] rounded-lg justify-center items-center"
          onPress={() => router.push('/')}
        >
          <Text className="text-white font-suit-bold text-body2">2025년 내 운세 보러가기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
