import { UserWithdrawalRequestDtoReasonEnum } from '@/openapi/models/UserWithdrawalRequestDto';
import ReasonItem from '@/pages/settings-account-withdrawl/ui/reason-item';
import TextField from '@/shared/ui/text-field';
import cn from '@/shared/utils/cn';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native';

export default function ReasonPicker() {
  const withdrawlReasonEnumToText = (reasonEnum: UserWithdrawalRequestDtoReasonEnum) => {
    const reason = {
      [UserWithdrawalRequestDtoReasonEnum.NOTUSE]: '자주 사용하지 않게 됐어요',
      [UserWithdrawalRequestDtoReasonEnum.FREQUENTALARM]: '알림이 너무 자주 와요',
      [UserWithdrawalRequestDtoReasonEnum.LACKOFCONTENT]: '볼 수 있는 콘텐츠가 부족해요',
      [UserWithdrawalRequestDtoReasonEnum.SIMILARRESULT]: '결과가 비슷하게 느껴졌어요',
      [UserWithdrawalRequestDtoReasonEnum.INCONVENIENCE]: '앱 사용이 불편해요 (속도, 화면 구성 등)',
      [UserWithdrawalRequestDtoReasonEnum.TOOMANYPAID]: '유료 기능이 많아서 부담돼요',
      [UserWithdrawalRequestDtoReasonEnum.PRIVACY]: '개인정보 보호가 걱정돼요',
      [UserWithdrawalRequestDtoReasonEnum.ETC]: '기타',
    };
    return reason[reasonEnum];
  };

  const WITHDRAWAL_REASONS = [
    UserWithdrawalRequestDtoReasonEnum.NOTUSE,
    UserWithdrawalRequestDtoReasonEnum.FREQUENTALARM,
    UserWithdrawalRequestDtoReasonEnum.LACKOFCONTENT,
    UserWithdrawalRequestDtoReasonEnum.SIMILARRESULT,
    UserWithdrawalRequestDtoReasonEnum.INCONVENIENCE,
    UserWithdrawalRequestDtoReasonEnum.TOOMANYPAID,
    UserWithdrawalRequestDtoReasonEnum.PRIVACY,
    UserWithdrawalRequestDtoReasonEnum.ETC,
  ];

  const router = useRouter();
  const [selectedReason, setSelectedReason] = useState<UserWithdrawalRequestDtoReasonEnum[]>([]);
  const [otherReason, setOtherReason] = useState<string>('');

  const handleCheckboxPress = (checked: boolean, reason: UserWithdrawalRequestDtoReasonEnum) => {
    if (checked) {
      checkReason(reason);
    } else {
      if (reason === UserWithdrawalRequestDtoReasonEnum.ETC) {
        setOtherReason('');
      }
      uncheckReason(reason);
    }
  };

  const checkReason = (reason: UserWithdrawalRequestDtoReasonEnum) => {
    setSelectedReason((prev) => [...prev, reason]);
  };

  const uncheckReason = (reason: UserWithdrawalRequestDtoReasonEnum) => {
    setSelectedReason((prev) => prev.filter((r) => r !== reason));
  };

  const handleNextPress = () => {
    if (selectedReason.length > 0) {
      router.push({
        pathname: '/settings/withdrawal-confirm-page',
        params: {
          reasons: selectedReason.join(','),
          otherReason:
            selectedReason.includes(UserWithdrawalRequestDtoReasonEnum.ETC) && otherReason
              ? otherReason
              : undefined,
        },
      });
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1 }}
    >
      <View className="flex-1">
        <View className="flex-1 px-6 py-5">
          <Text className="mb-4 text-headline2 text-grey-90 font-suit-bold">
            탈퇴 이유를 알려주세요
          </Text>

          <ScrollView>
            <View>
              {WITHDRAWAL_REASONS.map((reason) => (
                <ReasonItem
                  key={reason}
                  label={withdrawlReasonEnumToText(reason)}
                  value={selectedReason.includes(reason)}
                  onValueChange={(checked) => handleCheckboxPress(checked, reason)}
                />
              ))}
              {selectedReason.includes(UserWithdrawalRequestDtoReasonEnum.ETC) && (
                <TextField
                  multiline
                  placeholder="(선택) 상세 사유를 입력해 주세요"
                  containerClassName="ml-[30px]"
                  className="h-[96px]"
                  value={otherReason}
                  onChangeText={setOtherReason}
                  inputMode="text"
                />
              )}
            </View>
          </ScrollView>
        </View>

        {/* 하단 버튼 */}
        <View className="px-5 py-5">
          <Pressable
            className={cn(
              'h-[54px] rounded-lg justify-center items-center',
              selectedReason.length > 0 ? 'bg-grey-70' : 'bg-grey-30'
            )}
            onPress={handleNextPress}
            disabled={selectedReason.length === 0}
          >
            <Text className="text-white text-subhead3 font-suit-bold">다음</Text>
          </Pressable>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}
