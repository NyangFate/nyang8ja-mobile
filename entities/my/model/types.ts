export type User = {
  name: string;
  joinedAt: string;
  signInMethod: 'kakao' | 'apple';
  sajuInfo?: {
    gender: 'male' | 'female';
    birthDate: string;
    isBirthTimeKnown: boolean;
  };
};
