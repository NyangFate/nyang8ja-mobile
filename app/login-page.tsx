import AppleLoginButton from '@/features/login/ui/AppleLoginButton';
import Header from '@/features/login/ui/Header';
import KakaoLoginButton from '@/features/login/ui/KakaoLoginButton';
import LogoWitchCat from '@/features/login/ui/LogoWitchCat';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function LoginPage() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        <Header />

        <View className="mt-16">
          <LogoWitchCat />
        </View>

        <View className="px-5 gap-3 mt-[54px]">
          <KakaoLoginButton />
          <AppleLoginButton />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
