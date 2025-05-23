import AppleIcon from '@/assets/svgs/apple.svg';
import useSignInApple from '@/pages/login/api/useSignInApple';
import * as AppleAuthentication from 'expo-apple-authentication';
import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

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
  const { mutate: signInApple } = useSignInApple();

  const getFullNameOrDefault = (fullName: AppleAuthentication.AppleAuthenticationFullName) => {
    const { familyName = '', givenName = '' } = fullName;
    const hasName = Boolean(familyName || givenName);
    const defaultName = '김팔자';

    if (!hasName) return defaultName;

    return `${fullName.familyName || ''}${fullName.givenName || ''}`.trim();
  };

  return (
    <Pressable
      className="h-[54px] flex-row items-center justify-between px-5 bg-[#24292F] rounded-[4px]"
      onPress={async () => {
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [AppleAuthentication.AppleAuthenticationScope.FULL_NAME],
          });
          if (!credential.identityToken || !credential.fullName) {
            throw new Error('Invalid credential');
          }

          signInApple({
            appleSignInRequestDto: {
              idToken: credential.identityToken,
              fullName: getFullNameOrDefault(credential.fullName),
            },
          });
        } catch (e) {
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
