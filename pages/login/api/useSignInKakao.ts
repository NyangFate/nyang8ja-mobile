import { Class00AuthAPIApi, MobileKakaoSignInRequest } from '@/openapi/apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

export default function useSignInKakao() {
  const api = new Class00AuthAPIApi();

  return useMutation({
    mutationFn: (params: MobileKakaoSignInRequest) => {
      return api.mobileKakaoSignIn(params);
    },
    onSuccess: (data) => {
      if (!data.accessToken) return;
      return AsyncStorage.setItem('accessToken', data.accessToken);
    },
  });
}
