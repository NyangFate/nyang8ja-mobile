import Header from '@/features/my/ui/header';
import InfoCard from '@/features/my/ui/info-card';
import Menu from '@/features/my/ui/menu';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function MyPage() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <Header />
        <InfoCard />
        <Menu />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
