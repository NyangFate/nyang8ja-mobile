import BellIcon from '@/assets/svgs/bell.svg';
import BookmarkIcon from '@/assets/svgs/bookmark.svg';
import CircleUserIcon from '@/assets/svgs/circel-user.svg';
import React from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';

export default function Menu() {
  return (
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
  );
}
