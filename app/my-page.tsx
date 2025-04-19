import Header from '@/entities/my/ui/header';
import InfoCard from '@/entities/my/ui/info-card';
import Menu from '@/entities/my/ui/menu';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function MyPage() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <Header />
        <View className="my-3">
          <InfoCard />
        </View>
        <View className="flex-1 my-2">
          <Menu />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
