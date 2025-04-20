import ReasonItem from '@/entities/my-settings-account-withdrawl/ui/ReasonItem';
import cn from '@/shared/utils/cn';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from 'react-native';

export default function ReasonPicker() {
  const WITHDRAWAL_REASONS = [
    '자주 사용하지 않게 됐어요',
    '알림이 너무 자주 와요',
    '볼 수 있는 콘텐츠가 부족해요',
    '결과가 비슷하게 느껴졌어요',
    '앱 사용이 불편해요 (속도, 화면 구성 등)',
    '유료 기능이 많아서 부담돼요',
    '개인정보 보호가 걱정돼요',
    '기타',
  ];

  const router = useRouter();
  const [selectedReason, setSelectedReason] = useState<string[]>([]);

  const handleCheckboxPress = (checked: boolean, reason: string) => {
    if (checked) {
      checkReason(reason);
    } else {
      uncheckReason(reason);
    }
  };

  const checkReason = (reason: string) => {
    setSelectedReason((prev) => [...prev, reason]);
  };
  const uncheckReason = (reason: string) => {
    setSelectedReason((prev) => prev.filter((r) => r !== reason));
  };

  const handleNextPress = () => {
    if (selectedReason) {
      // 다음 단계로 이동
      console.log('선택된 사유:', selectedReason);
      router.push('/settings/withdrawal-confirm-page');
    }
  };

  return (
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
                label={reason}
                value={selectedReason.includes(reason)}
                onValueChange={(checked) => handleCheckboxPress(checked, reason)}
              />
            ))}
            {selectedReason.includes('기타') && (
              <View>
                <TextInput
                  className="h-[54px] rounded-lg justify-center items-center"
                  placeholder="기타 사유를 입력해주세요"
                />
              </View>
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
  );
}
