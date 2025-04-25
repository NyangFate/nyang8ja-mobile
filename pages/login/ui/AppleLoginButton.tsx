import AppleIcon from '@/assets/svgs/apple.svg';
import * as AppleAuthentication from 'expo-apple-authentication';
import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

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

export default function AppleLoginButton() {
  return (
    <Pressable
      className="h-[54px] flex-row items-center justify-between px-5 bg-[#24292F] rounded-[4px]"
      onPress={async () => {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME],
          });
          console.log('credential', credential);
          // signed in
        } catch (e) {
          console.log('e', e);
          const error = e as AppleAuthenticationError;
          if (error.code !== 'ERR_REQUEST_CANCELED') {
            Alert.alert('로그인에 실패했어요', '잠시 후 다시 시도해 주세요', [{ text: '확인' }]);
          }
        }
      }}
    >
      <AppleIcon width={20} height={20} />
      <Text className="text-white text-subhead3 font-suitkakaoSignIn-bold">Apple로 시작하기</Text>
      <View className="w-5" />
    </Pressable>
  );
}
