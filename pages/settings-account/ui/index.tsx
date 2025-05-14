import AccountInfo from '@/pages/settings-account/ui/account-info';
import AccountWithdrawal from '@/pages/settings-account/ui/account-withdrawal';
import Logout from '@/pages/settings-account/ui/logout';
import useUser from '@/shared/api/useUser';
import Header from '@/shared/ui/header';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, View } from 'react-native';
export default function Account() {
  const router = useRouter();

  const { data: user } = useUser();
  const queryClient = useQueryClient();

  if (!user) {
    return null;
  }

  const handleWithdrawalPress = () => {
    router.push('/settings/withdrawal-page');
  };

  const handleBackPress = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="계정 설정" onBackPress={handleBackPress} />
      <AccountInfo user={user} />

      <View className="h-px mx-5 bg-grey-10" />

      <View className="flex-1 px-5 py-3">
        <Logout />
      </View>

      {/* 탈퇴하기 */}
      <AccountWithdrawal onWithdrawalPress={handleWithdrawalPress} />
    </SafeAreaView>
  );
}
