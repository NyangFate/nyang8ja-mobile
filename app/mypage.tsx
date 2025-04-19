import BellIcon from '@/assets/svgs/bell.svg';
import BookmarkIcon from '@/assets/svgs/bookmark.svg';
import ChevronLeftIcon from '@/assets/svgs/chevron-left.svg';
import ChevronRightIcon from '@/assets/svgs/chevron-right.svg';
import CircleUserIcon from '@/assets/svgs/circel-user.svg';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Mypage() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        {/* 헤더 */}
        <View className="flex-row justify-between items-center p-[14px]">
          <Pressable onPress={() => router.navigate('/')}>
            <ChevronLeftIcon width={24} height={24} />
          </Pressable>
          <Text className="text-subhead3 font-suit-bold text-grey-90">마이</Text>
          <View className="w-6" />
        </View>
        {/* 정보 카드 */}
        <View className="px-5 my-[12px]">
          <Pressable onPress={() => router.navigate('/login')}>
            <View className="flex-row items-center justify-between py-4 pl-5 pr-4 bg-grey-00 rounded-xl">
              <View className="gap-[2px]">
                <Text className="text-headline1 text-grey-90 font-suit-bold">로그인하기</Text>
                <Text className="text-body1 font-suit-regular text-grey-70">
                  로그인하고 맞춤 결과를 만나봐요
                </Text>
              </View>

              <ChevronRightIcon width={24} height={24} />
            </View>
          </Pressable>
        </View>
        <ScrollView className="flex-1 my-2">
          {/* 서비스 메뉴 */}
          <View className="px-5 py-3">
            <Text className="text-body1 text-grey-50 font-suit-regular">서비스</Text>
            <Pressable className="flex-row items-center gap-3 py-3">
              <BookmarkIcon width={24} height={24} />
              <Text className="text-body3 font-suit-regular text-grey-90">결과 모아보기</Text>
            </Pressable>
          </View>

          <View className="h-px mx-5 bg-grey-10" />

          {/* 관리 메뉴 */}
          <View className="px-5 py-3">
            <Text className="text-body1 text-grey-50 font-suit-regular">관리</Text>
            <Pressable className="flex-row items-center gap-3 py-3">
              <CircleUserIcon width={24} height={24} />
              <Text className="text-body3 font-suit-regular text-grey-90">계정 관리</Text>
            </Pressable>
            <Pressable className="flex-row items-center gap-3 py-3">
              <BellIcon width={24} height={24} />
              <Text className="text-body3 font-suit-regular text-grey-90">알림 설정</Text>
            </Pressable>
          </View>

          <View className="h-px mx-5 bg-grey-10" />

          {/* 기타 메뉴 */}
          <View className="px-5 py-3">
            <Pressable className="py-3">
              <Text className="font-suit-regular text-body-3 text-grey-40">서비스 이용약관</Text>
            </Pressable>
            <Pressable className="py-3">
              <Text className="font-suit-regular text-body-3 text-grey-40">개인정보처리방침</Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
