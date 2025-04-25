import Header from '@/shared/ui/header';
import InfoCard from '@/src/pages/my/ui/info-card';
import Menu from '@/src/pages/my/ui/menu';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MyScreen() {
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
