import AppleLoginButton from '@/pages/login/ui/apple-login-button';
import Header from '@/pages/login/ui/header';
import KakaoLoginButton from '@/pages/login/ui/kakao-login-button';
import LogoWitchCat from '@/pages/login/ui/logo-with-cat';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const router = useRouter();

  return (
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
  );
}
