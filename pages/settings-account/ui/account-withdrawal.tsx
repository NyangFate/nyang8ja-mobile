import React from 'react';
import { Pressable, Text, View } from 'react-native';

type AccountWithdrawalProps = {
  onWithdrawalPress: () => void;
};

export default function AccountWithdrawal({ onWithdrawalPress }: AccountWithdrawalProps) {
  return (
    <View className="p-5">
      <View className="flex-row items-center justify-center py-3">
        <Pressable onPress={onWithdrawalPress}>
          <Text className="underline font-suit-regular text-body3 text-grey-50">탈퇴하기</Text>
        </Pressable>
      </View>
    </View>
  );
}
