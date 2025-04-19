import KakaoIcon from '@/assets/svgs/kakao.svg';
import { Class00AuthAPIApi } from '@/openapi/apis';
import { login } from '@react-native-kakao/user';
import React from 'react';
import { Alert, Pressable, Text, View } from 'react-native';

export default function KakaoLoginButton() {
  return (
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
          Alert.alert('로그인에 실패했어요', '잠시 후 다시 시도해 주세요', [{ text: '확인' }]);
        }
      }}
      className="h-[54px] flex-row items-center justify-between px-5 bg-[#FFE833] rounded-[4px]"
    >
      <KakaoIcon width={20} height={20} />
      <Text className="text-subhead3 font-suit-bold text-grey-90">카카오톡으로 시작하기</Text>
      <View className="w-5" />
    </Pressable>
  );
}
