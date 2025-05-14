import { SocialAccountResponseDtoSocialTypeEnum } from '@/openapi/models/SocialAccountResponseDto';
import AccountInfo from '@/pages/settings-account/ui/account-info';
import AccountWithdrawal from '@/pages/settings-account/ui/account-withdrawal';
import Logout from '@/pages/settings-account/ui/logout';
import LogoutModal from '@/pages/settings-account/ui/logout-modal';
import useUser from '@/shared/api/useUser';
import Header from '@/shared/ui/header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logout } from '@react-native-kakao/user';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
export default function Account() {
  const router = useRouter();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const { data: user } = useUser();
  const queryClient = useQueryClient();

  if (!user) {
    return null;
  }

  const isKakaoLogin =
    user.socialAccounts[0].socialType === SocialAccountResponseDtoSocialTypeEnum.KAKAO;

  const handleLogout = async () => {
    if (isKakaoLogin) {
      await logout();
    }

    await AsyncStorage.removeItem('accessToken');

    await queryClient.clear();

    setIsLogoutModalVisible(false);

    router.replace('/my-page');
  };

  const handleWithdrawalPress = () => {
    router.push('/settings/withdrawal-page');
  };

  const handleBackPress = () => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="계정 설정" onBackPress={handleBackPress} />
      <AccountInfo user={user} />

      <View className="h-px mx-5 bg-grey-10" />

      <View className="flex-1 px-5 py-3">
        <Logout />
      </View>

      {/* 탈퇴하기 */}
      <AccountWithdrawal onWithdrawalPress={handleWithdrawalPress} />

      {/* 로그아웃 확인 팝업 */}
      <LogoutModal
        isVisible={isLogoutModalVisible}
        onClose={() => setIsLogoutModalVisible(false)}
        onConfirm={handleLogout}
      />

      {/* 계정 탈퇴 확인 팝업 */}
    </SafeAreaView>
  );
}
