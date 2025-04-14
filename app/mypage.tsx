import ChevronLeft from '@/assets/svgs/chevron-left.svg';
import ChevronRight from '@/assets/svgs/chevron-right.svg';
import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Mypage() {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        {/* 헤더 */}
        <View className="flex-row justify-between items-center p-[14px]">
          <TouchableOpacity>
            <ChevronLeft width={24} height={24} />
          </TouchableOpacity>
          <Text className="text-subhead3 text-grey-90">마이</Text>
          <View className="w-6" />
        </View>

        {/* 정보 카드 */}
        <View className="mx-5 my-4">
          <View className="bg-[#F6F8FA] rounded-xl p-5 flex-row justify-between items-center">
            <View>
              <Text className="font-bold text-xl text-[#24292F]">로그인하기</Text>
              <Text className="text-sm text-[#434A53] mt-0.5">로그인하고 맞춤 결과를 만나봐요</Text>
            </View>
            <TouchableOpacity>
              <ChevronRight width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView className="flex-1">
          {/* 서비스 메뉴 */}
          <View className="px-5 py-3">
            <Text className="text-sm text-[#6E7781] mb-1">서비스</Text>
            <TouchableOpacity className="flex-row items-center py-3">
              <FontAwesome5 name="bookmark" size={20} color="#24292F" solid={false} />
              <Text className="ml-3 text-base text-[#24292F]">결과 모아보기</Text>
            </TouchableOpacity>
          </View>

          <View className="h-px bg-[#EAEEF2] mx-5" />

          {/* 관리 메뉴 */}
          <View className="px-5 py-3">
            <Text className="text-sm text-[#6E7781] mb-1">관리</Text>
            <TouchableOpacity className="flex-row items-center py-3">
              <FontAwesome5 name="user-circle" size={20} color="#24292F" />
              <Text className="ml-3 text-base text-[#24292F]">계정 관리</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center py-3">
              <FontAwesome5 name="bell" size={20} color="#24292F" />
              <Text className="ml-3 text-base text-[#24292F]">알림 설정</Text>
            </TouchableOpacity>
          </View>

          <View className="h-px bg-[#EAEEF2] mx-5" />

          {/* 기타 메뉴 */}
          <View className="px-5 py-3">
            <TouchableOpacity className="py-3">
              <Text className="text-base text-[#8C959F]">서비스 이용약관</Text>
            </TouchableOpacity>
            <TouchableOpacity className="py-3">
              <Text className="text-base text-[#8C959F]">개인정보처리방침</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
