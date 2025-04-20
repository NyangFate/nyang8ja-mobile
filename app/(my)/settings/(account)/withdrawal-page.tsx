import Header from '@/entities/my-settings-account-withdrawl/ui/header';
import ReasonPicker from '@/entities/my-settings-account-withdrawl/ui/ReasonPicker';
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
