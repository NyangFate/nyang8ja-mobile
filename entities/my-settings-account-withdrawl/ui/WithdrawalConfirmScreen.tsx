import Header from '@/entities/my-settings-account/ui/header';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { Pressable, SafeAreaView, Text, View } from 'react-native';

interface WithdrawalConfirmScreenProps {
  username?: string;
}

export default function WithdrawalConfirmScreen({
  username = '사용자',
}: WithdrawalConfirmScreenProps) {
  const router = useRouter();
  const { reasons, otherReason } = useLocalSearchParams();

  const handleBackPress = () => {
    router.back();
  };

  const handleWithdrawal = () => {
    // 계정 탈퇴 로직 구현
    // 탈퇴 완료 후 로그인 페이지로 이동
    // router.replace('/login-page');
  };

  const handleStayPress = () => {
    // 탈퇴 취소하고 메인 페이지로 이동
    router.replace('/my-page');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* 헤더 */}
      <Header />

      {/* 컨텐츠 */}
      <View className="px-6 py-6">
        <Text className="mb-6 text-headline2 text-grey-90 font-suit-bold">
          {username}님,{'\n'}탈퇴 전 꼭 확인해 주세요
        </Text>

        <View className="mb-3">
          <Text className="mb-2 text-body3 text-grey-70 font-suit-regular">
            내 사주 정보를 복구할 수 없어요.
          </Text>
          <Text className="mb-2 text-body3 text-grey-70 font-suit-regular">
            저장된 사주, 타로 결과를 다시 볼 수 없어요.
          </Text>
          <Text className="mb-2 text-body3 text-grey-70 font-suit-regular">
            보유 중인 혜택이 모두 사라져요.
          </Text>
        </View>

        {/* 배너 */}
        <View className="relative p-5 mt-4 mb-6 bg-primary-00 rounded-xl">
          <Text className="mb-4 text-body1 text-grey-50 font-suit-regular">
            지금 떠나면 그 동안의 기록도 모두 사라져요.{'\n'}
            혹시 다시 돌아오실 생각이 있다면,{'\n'}
            탈퇴되신 잠시 쉬어보는 건 어때요?
          </Text>

          <Pressable onPress={handleStayPress}>
            <Text className="text-subhead3 text-primary-03 font-suit-bold">
              조금 더 써볼게요 &gt;
            </Text>
          </Pressable>

          {/* 여기에 일러스트레이션 추가 (실제 구현 시 이미지 컴포넌트로 대체) */}
          <View className="absolute w-20 h-20 right-4 top-6" />
        </View>
      </View>

      {/* 하단 버튼 */}
      <View className="px-5 pt-5 pb-5 mt-auto">
        <Pressable
          className="w-full h-[54px] rounded-lg justify-center items-center bg-grey-70"
          onPress={handleWithdrawal}
        >
          <Text className="text-white text-subhead3 font-suit-bold">탈퇴하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
