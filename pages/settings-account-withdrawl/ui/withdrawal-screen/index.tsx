import ReasonPicker from '@/pages/settings-account-withdrawl/ui/reason-picker';
import Header from '@/shared/ui/header';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function WithdrawalScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="탈퇴하기" onBackPress={handleBackPress} />
      <ReasonPicker />
    </SafeAreaView>
  );
}
