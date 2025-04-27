import { Class00AuthAPIApi } from '@/openapi/apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

export default function useSignInKakao() {
  const api = new Class00AuthAPIApi();

  return useMutation({
    mutationFn: api.mobileKakaoSignIn,
    onSuccess: (data) => {
      return AsyncStorage.setItem('accessToken', data.accessToken);
    },
  });
}
