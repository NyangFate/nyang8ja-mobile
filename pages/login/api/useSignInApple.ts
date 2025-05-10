import { Class00AuthAPIApi, MobileAppleSignInRequest } from '@/openapi/apis';
import { useUpdateUser } from '@/shared/api/useUpdateUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { useMutation } from '@tanstack/react-query';
import { router } from 'expo-router';

export default function useSignInApple() {
  const api = new Class00AuthAPIApi();
  const { mutate: updateUser } = useUpdateUser();

  return useMutation({
    mutationFn: (params: MobileAppleSignInRequest) => api.mobileAppleSignIn(params),
    onSuccess: async (data) => {
      await AsyncStorage.setItem('accessToken', data.accessToken);
      await updateUser({
        userUpdateRequestDto: {
          fcmToken: await messaging().getToken(),
        },
      });

      if (data.isSignUp) {
        await messaging().requestPermission();
        router.replace('/(my)/saju-info/(create)/create-page');
      } else {
        router.replace('/(my)/my-page');
      }
    },
  });
}
