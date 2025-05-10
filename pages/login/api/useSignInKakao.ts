import { Class00AuthAPIApi, MobileKakaoSignInRequest } from '@/openapi/apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';

export default function useSignInKakao() {
  const api = new Class00AuthAPIApi();

  return useMutation({
    mutationFn: (params: MobileKakaoSignInRequest) => {
      return api.mobileKakaoSignIn(params);
    },
    onSuccess: async (data) => {
      await AsyncStorage.setItem('accessToken', data.accessToken);

      if (data.isSignUp) {
        await messaging().requestPermission();
        router.replace('/(my)/saju-info/(create)/create-page');
      } else {
        router.replace('/(my)/my-page');
      }
    },
  });
}
