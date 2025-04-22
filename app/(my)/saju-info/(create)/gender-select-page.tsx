import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import Header from '@/entities/my-saju-info-create/ui/header';
import cn from '@/shared/utils/cn';
import { Image } from 'expo-image';
import { router, useLocalSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

export default function GenderSelectPage() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const [gender, setGender] = useState<'male' | 'female' | undefined>(undefined);

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
            <Text className="text-center text-body3 font-suit-regular text-grey-70">
              집사의 성별도 알고 싶어.
            </Text>
          </View>
          {/* 선택 영역 */}
          <View className="flex-row items-center justify-center gap-2 mt-3">
            <Text className="text-headline1 font-suit-bold text-grey-90">내 성별은</Text>
            <View className="flex-row items-center justify-center gap-2">
              <Pressable
                className={cn(
                  'py-3 rounded-lg justify-center items-center px-7',
                  gender === 'male'
                    ? 'bg-primary-01 border border-primary-03'
                    : 'bg-grey-00 border border-grey-20'
                )}
                onPress={() => setGender('male')}
              >
                <Text
                  className={cn(
                    gender === 'male'
                      ? 'text-subhead3 text-primary-03 font-suit-bold'
                      : 'text-body3 text-grey-30 font-suit-regular'
                  )}
                >
                  남자
                </Text>
              </Pressable>
              <Pressable
                className={cn(
                  'py-3 rounded-lg justify-center items-center px-7',
                  gender === 'female'
                    ? 'bg-primary-01 border border-primary-03'
                    : 'bg-grey-00 border border-grey-20'
                )}
                onPress={() => setGender('female')}
              >
                <Text
                  className={cn(
                    gender === 'female'
                      ? 'text-subhead3 text-primary-03 font-suit-bold'
                      : 'text-body3 text-grey-30 font-suit-regular '
                  )}
                >
                  여자
                </Text>
              </Pressable>
            </View>
            <Text className="text-headline1 font-suit-bold text-grey-90">야.</Text>
          </View>
        </View>

        <View className="gap-4 p-5">
          <Pressable
            className={cn(
              'bg-grey-90 h-[54px] rounded-lg justify-center items-center',
              gender === undefined && 'bg-grey-30 text-grey-10'
            )}
            onPress={() => {
              router.push({
                pathname: '/(my)/saju-info/(create)/birthdate-input-page',
                params: {
                  name,
                  gender,
                },
              });
            }}
            disabled={gender === undefined}
          >
            <Text className="text-white text-subhead3 font-suit-bold">다음</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
