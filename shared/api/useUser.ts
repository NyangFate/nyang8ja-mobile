import { Class01UserAPIApi } from '@/openapi/apis';
import { SocialAccountResponseDtoSocialTypeEnum } from '@/openapi/models/SocialAccountResponseDto';
import { UserProfileResponseDtoGenderEnum } from '@/openapi/models/UserProfileResponseDto';
import {
  UserResponseDto,
  UserResponseDtoUserProfileStatusEnum,
} from '@/openapi/models/UserResponseDto';
import { Configuration } from '@/openapi/runtime';
import { fakerKO as faker } from '@faker-js/faker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';

export default function useUser() {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const api = new Class01UserAPIApi(
        new Configuration({
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      );

      // TODO: MOCK 처리 추후 삭제
      const res = await api.getUserInfo().catch(() => {
        return mockUser;
      });

      return res;
    },
  });
}

/**
 * 테스트용 유저 정보
 * 1. 로그인하지 않은 유저
 * 2. 사주 정보가 없는 유저
 * 3. 사주 정보가 완전히 등록된 유저
 */
const mockUser: UserResponseDto = {
  profile: {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    gender: UserProfileResponseDtoGenderEnum.MALE,
    birthday: faker.date.past(),
    birthtime: faker.date.past(),
  },
  socialAccounts: [
    {
      socialType: SocialAccountResponseDtoSocialTypeEnum.APPLE,
      updatedAt: faker.date.past(),
    },
  ],
  userKey: 'user-002',
  userProfileStatus: UserResponseDtoUserProfileStatusEnum.COMPLETE,
};
