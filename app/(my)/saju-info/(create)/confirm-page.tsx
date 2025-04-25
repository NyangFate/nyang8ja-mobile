import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import Header from '@/pages/saju-info-create/ui/header';
import cn from '@/shared/utils/cn';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

export default function ConfirmPage() {
  const { name, gender, birthDate, birthTime, isLunarCalendar, isBirthTimeUnknown } =
    useLocalSearchParams<{
      name: string;
      gender: string;
      birthDate: string;
      birthTime: string;
      isLunarCalendar: string;
      isBirthTimeUnknown: string;
    }>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        {/* 헤더 */}
        <Header />

        {/* 메인 콘텐츠 */}
        <View className="items-center justify-center flex-1">
          <View className="items-center justify-center">
            <Image source={SurprisedCatWithPacifierImage} style={{ width: 180, height: 180 }} />
          </View>
          <View className="mt-5">
            <Text className="text-center text-headline1 font-suit-bold text-grey-90">
              이름은 <Text className="font-suit-bold text-primary-03">{name}</Text>, 성별은{' '}
              <Text className="font-suit-bold text-primary-03">
                {gender === 'male' ? '남자' : '여자'},{'\n'}
              </Text>
              <Text className="font-suit-bold text-primary-03">
                생년월일은 {birthDate.split('-').join('.')}
                {isLunarCalendar === 'true' ? '(음력)' : ''},{'\n'}
              </Text>
              태어난 시간은 <Text className="font-suit-bold text-primary-03">{birthTime}</Text>{' '}
              맞아?
            </Text>
          </View>
          {/* 선택 영역 */}
        </View>

        <View className="flex-row gap-4 p-5">
          <Pressable
            className={cn('bg-grey-10 h-[54px] rounded-lg justify-center items-center flex-1')}
            onPress={() => {
              router.dismissTo({
                pathname: '/(my)/saju-info/(create)/name-input-page',
                params: {
                  name,
                  gender,
                  birthDate,
                  birthTime,
                  isLunarCalendar,
                  isBirthTimeUnknown,
                },
              });
            }}
          >
            <Text className="text-grey-70 text-subhead3 font-suit-bold">다시 입력할래</Text>
          </Pressable>
          <Pressable
            className={cn('bg-grey-90 h-[54px] rounded-lg justify-center items-center flex-1')}
            onPress={() => {
              router.dismissAll();
              router.replace({
                pathname: '/(my)/my-page',
                params: {
                  name,
                  gender,
                  birthDate,
                  birthTime,
                  isLunarCalendar,
                  isBirthTimeUnknown,
                },
              });
            }}
          >
            <Text className="text-white text-subhead3 font-suit-bold">맞아, 기억해줘</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
