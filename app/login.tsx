import NyangPaljaTextLogo from '@/assets/images/nyang8ja-text-logo.webp';
import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import CloseIcon from '@/assets/svgs/close.svg';
import * as AppleAuthentication from 'expo-apple-authentication';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Pressable, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Apple 인증 오류 타입 정의
interface AppleAuthenticationError extends Error {
  code:
    | 'ERR_INVALID_OPERATION'
    | 'ERR_INVALID_RESPONSE'
    | 'ERR_INVALID_SCOPE'
    | 'ERR_REQUEST_CANCELED'
    | 'ERR_REQUEST_FAILED'
    | 'ERR_REQUEST_NOT_HANDLED'
    | 'ERR_REQUEST_NOT_INTERACTIVE'
    | 'ERR_REQUEST_UNKNOWN';
}

export default function Login() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 bg-white">
        {/* 헤더 */}
        <View className="flex-row justify-between items-center p-[14px]">
          <View className="w-6" />
          <Pressable onPress={() => router.back()}>
            <CloseIcon width={24} height={24} />
          </Pressable>
        </View>

        {/* 고양이 일러스트 영역 */}
        <View className="mt-16">
          <View className="items-center justify-center">
            <Image source={SurprisedCatWithPacifierImage} style={{ width: 240, height: 240 }} />
          </View>
          <View className="items-center justify-center mt-4">
            <Image source={NyangPaljaTextLogo} style={{ width: 174, height: 58 }} />
          </View>
        </View>

        {/* 로그인 버튼 */}
        <View className="px-5 gap-3 mt-[60px]">
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
            cornerRadius={4}
            style={{ height: 54 }}
            onPress={async () => {
              try {
                const credential = await AppleAuthentication.signInAsync({
                  requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                  ],
                });
                // signed in
              } catch (e) {
                const error = e as AppleAuthenticationError;
                if (error.code === 'ERR_REQUEST_CANCELED') {
                  router.back();
                } else {
                  Alert.alert('로그인에 실패했어요', '잠시 후 다시 시도해 주세요', [
                    { text: '확인' },
                  ]);
                }
              }
            }}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
