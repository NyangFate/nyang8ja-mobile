import AppleLoginButton from '@/entities/login/ui/AppleLoginButton';
import Header from '@/entities/login/ui/Header';
import KakaoLoginButton from '@/entities/login/ui/KakaoLoginButton';
import LogoWitchCat from '@/entities/login/ui/LogoWitchCat';
import { useRouter } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginPage() {
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
