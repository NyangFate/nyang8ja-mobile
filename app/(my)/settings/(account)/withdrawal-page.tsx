import Header from '@/pages/settings-account-withdrawl/ui/header';
import ReasonPicker from '@/pages/settings-account-withdrawl/ui/reason-picker';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function WithdrawalPage() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
      <ReasonPicker />
    </SafeAreaView>
  );
}
