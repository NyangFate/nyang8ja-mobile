import LogoutIcon from '@/assets/svgs/logout.svg';
import { SocialAccountResponseDtoSocialTypeEnum } from '@/openapi/models';
import useUser from '@/shared/api/useUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '@react-native-kakao/user';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import LogoutModal from './logout-modal';

export default function Logout() {
  const router = useRouter();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const queryClient = useQueryClient();
  const { data: user } = useUser();

  const isKakaoLogin =
    user?.socialAccounts[0].socialType === SocialAccountResponseDtoSocialTypeEnum.KAKAO;

  const handleLogout = async () => {
    if (isKakaoLogin) {
      await logout();
    }

    setIsLogoutModalVisible(false);
    await AsyncStorage.removeItem('accessToken');
    queryClient.clear();
    router.replace('/(my)/my-page');
  };

  const handleLogoutPress = () => {
    setIsLogoutModalVisible(true);
  };

  if (!user) {
    return null;
  }

  return (
    <>
      <Pressable className="flex-row items-center gap-3 py-3" onPress={handleLogoutPress}>
        <LogoutIcon width={24} height={24} />
        <Text className="font-suit-regular text-body3 text-grey-90">로그아웃</Text>
      </Pressable>

      <LogoutModal
        isVisible={isLogoutModalVisible}
        onClose={() => setIsLogoutModalVisible(false)}
        onConfirm={handleLogout}
      />
    </>
  );
}
