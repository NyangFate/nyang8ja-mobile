import InfoCard from '@/pages/my/ui/info-card';
import Menu from '@/pages/my/ui/menu';
import Header from '@/shared/ui/header';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyPage() {
  const router = useRouter();

  const handleBackPress = () => {
    router.navigate('/');
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="마이" onBackPress={handleBackPress} />
      <View className="my-3">
        <InfoCard />
      </View>
      <View className="flex-1 my-2">
        <Menu />
      </View>
    </SafeAreaView>
  );
}
