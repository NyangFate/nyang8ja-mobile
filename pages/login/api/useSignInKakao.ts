import { Class00AuthAPIApi, MobileKakaoSignInRequest } from '@/openapi/apis';
import { useUpdateUser } from '@/shared/api/useUpdateUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { router } from 'expo-router';

export default function useSignInKakao() {
  const api = new Class00AuthAPIApi();
  const { mutate: updateUser } = useUpdateUser();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: MobileKakaoSignInRequest) => {
      return api.mobileKakaoSignIn(params);
    },
    onSuccess: async (data) => {
      await AsyncStorage.setItem('accessToken', data.accessToken);
      await updateUser({
        userUpdateRequestDto: {
          fcmToken: await messaging().getToken(),
        },
      });

      queryClient.invalidateQueries();

      if (data.isSignUp) {
        await messaging().requestPermission();
        router.replace('/(my)/saju-info/(create)/create-page');
      } else {
        router.dismiss();
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
}
