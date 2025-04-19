export type User = {
  name: string;
  joinedAt: string;
  signInMethod: 'kakao' | 'apple';
  sajuInfo?: SajuInfo;
};

export type SajuInfo = {
  gender: 'male' | 'female';
  birthDate: string;
  isBirthTimeKnown: boolean;
};
