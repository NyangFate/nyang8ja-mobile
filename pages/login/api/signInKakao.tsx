import { Class00AuthAPIApi } from '@/openapi/apis/Class00AuthAPIApi';

export default async function signInKakao(accessToken: string) {
  const api = new Class00AuthAPIApi();

  const response = await api.mobileKakaoSignIn({
    kakaoSignInRequestDto: {
      accessToken: accessToken,
    },
  });

  return response;
}
