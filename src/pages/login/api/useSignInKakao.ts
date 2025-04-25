import { Class00AuthAPIApi } from '@/openapi/apis';
import { useMutation } from '@tanstack/react-query';

export default function useSignInKakao() {
  const api = new Class00AuthAPIApi();

  return useMutation({
    mutationFn: api.mobileKakaoSignIn,
  });
}
