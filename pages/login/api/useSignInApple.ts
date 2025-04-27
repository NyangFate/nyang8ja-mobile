import { Class00AuthAPIApi, MobileAppleSignInRequest } from '@/openapi/apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

export default function useSignInApple() {
  const api = new Class00AuthAPIApi();

  return useMutation({
    mutationFn: (params: MobileAppleSignInRequest) => api.mobileAppleSignIn(params),
    onSuccess: (data) => {
      if (!data.accessToken) return;
      return AsyncStorage.setItem('accessToken', data.accessToken);
    },
  });
}
