import NyangPaljaTextLogo from '@/assets/images/nyang8ja-text-logo.webp';
import SurprisedCatWithPacifierImage from '@/assets/images/surprised-cat-with-pacifier.webp';
import AppleIcon from '@/assets/svgs/apple.svg';
import CloseIcon from '@/assets/svgs/close.svg';
import KakaoIcon from '@/assets/svgs/kakao.svg';
import { Class00AuthAPIApi } from '@/openapi/apis';
import { login } from '@react-native-kakao/user';
import * as AppleAuthentication from 'expo-apple-authentication';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';
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
        <View className="px-5 gap-3 mt-[54px]">
          {/* 카카오 버튼 */}
          <Pressable
            onPress={async () => {
              const credential = await login();

              try {
                const api = new Class00AuthAPIApi();

                const response = await api.kakaoSignIn({
                  kakaoSignInRequestDto: {
                    authorizationCode: credential.accessToken,
                  },
                });
              } catch (error) {
                Alert.alert('로그인에 실패했어요', '잠시 후 다시 시도해 주세요', [
                  { text: '확인' },
                ]);
              }
            }}
            className="h-[54px] flex-row items-center justify-between px-5 bg-[#FFE833] rounded-[4px]"
          >
            <KakaoIcon width={20} height={20} />
            <Text className="text-subhead3 font-suit-bold text-grey-90">카카오톡으로 시작하기</Text>
            <View className="w-5" />
          </Pressable>

          {/* 애플 버튼 */}
          <Pressable
            className="h-[54px] flex-row items-center justify-between px-5 bg-[#24292F] rounded-[4px]"
            onPress={async () => {
              try {
                const credential = await AppleAuthentication.signInAsync({
                  requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME],
                });
                // signed in
              } catch (e) {
                const error = e as AppleAuthenticationError;
                if (error.code !== 'ERR_REQUEST_CANCELED') {
                  Alert.alert('로그인에 실패했어요', '잠시 후 다시 시도해 주세요', [
                    { text: '확인' },
                  ]);
                }
              }
            }}
          >
            <AppleIcon width={20} height={20} />
            <Text className="text-white text-subhead3 font-suitkakaoSignIn-bold">
              Apple로 시작하기
            </Text>
            <View className="w-5" />
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
