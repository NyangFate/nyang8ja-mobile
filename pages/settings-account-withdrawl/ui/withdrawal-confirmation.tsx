import { UserWithdrawalRequestDtoReasonEnum } from '@/openapi/models/UserWithdrawalRequestDto';
import useWithdrawAccount from '@/pages/settings-account-withdrawl/api/useWithdrawAccount';
import useUser from '@/shared/api/useUser';
import Header from '@/shared/ui/header';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, SafeAreaView, Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

export default function WithdrawalConfirmation() {
  const { data: user } = useUser();

  const router = useRouter();
  const { reasons, otherReason } = useLocalSearchParams<{
    reasons: string;
    otherReason: string;
  }>();
  const { mutate: withdrawAccount } = useWithdrawAccount();

  const handleWithdrawal = () => {
    try {
      withdrawAccount(
        {
          reason: reasons.split(',') as UserWithdrawalRequestDtoReasonEnum[],
          detail: otherReason,
        },
        {
          onSuccess: () => {
            router.navigate('/(my)/my-page');
            Toast.show({
              type: 'success',
              text1: '탈퇴가 완료되었습니다.',
            });
          },
        }
      );
    } catch (error) {
      Toast.show({
        type: 'error',
        text1: '탈퇴에 실패했습니다.',
      });
    }
  };

  const handleStayPress = () => {
    router.dismissTo('/my-page');
  };

  const handleBackPress = () => {
    router.back();
  };

  if (!user?.name) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="탈퇴하기" onBackPress={handleBackPress} />

      {/* 컨텐츠 */}
      <View className="flex-1 px-6 py-5">
        <Text className="mb-3 text-headline2 text-grey-90 font-suit-bold">
          {user.name}님,{'\n'}탈퇴 전 꼭 확인해 주세요
        </Text>

        <View className="gap-2">
          <Text className="text-body3 text-grey-70 font-suit-regular">
            {'  \u2022  '} 내 사주 정보를 복구할 수 없어요.
          </Text>
          <Text className="text-body3 text-grey-70 font-suit-regular">
            {'  \u2022  '} 저장된 사주, 타로 결과를 다시 볼 수 없어요.
          </Text>
          <Text className="text-body3 text-grey-70 font-suit-regular">
            {'  \u2022  '} 보유 중인 혜택이 모두 사라져요.
          </Text>
        </View>
      </View>

      {/* 배너 */}
      <View className="px-6 mb-[6px]">
        <View className="relative gap-3 px-5 py-4 bg-primary-00 rounded-xl">
          <Text className="text-body1 text-grey-50 font-suit-regular">
            지금 떠나면 그 동안의 기록도 모두 사라져요.{'\n'}
            혹시 다시 돌아오실 생각이 있다면,{'\n'}
            탈퇴 대신 잠시 쉬어보는 건 어때요?
          </Text>

          <Pressable onPress={handleStayPress} className="self-start">
            <Text className="text-subhead3 text-primary-03 font-suit-bold">
              조금 더 써볼게요 {'>'}
            </Text>
          </Pressable>
          {/* 여기에 일러스트레이션 추가 (실제 구현 시 이미지 컴포넌트로 대체) */}
          <View className="absolute w-20 h-20 right-4 top-6" />
        </View>
      </View>

      {/* 하단 버튼 */}
      <View className="px-5 py-5">
        <Pressable
          className="h-[54px] rounded-lg justify-center items-center bg-grey-70"
          onPress={handleWithdrawal}
        >
          <Text className="text-white text-subhead3 font-suit-bold">탈퇴하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
