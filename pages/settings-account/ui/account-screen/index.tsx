import useUser from '@/pages/my/api/useUser';
import AccountInfo from '@/pages/settings-account/ui/account-info';
import DeleteAccount from '@/pages/settings-account/ui/delete-account';
import Logout from '@/pages/settings-account/ui/logout';
import LogoutModal from '@/pages/settings-account/ui/logout-modal';
import Header from '@/shared/ui/header';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
export default function AccountScreen() {
  const router = useRouter();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const { data: user } = useUser();

  const handleLogout = () => {
    // 로그아웃 로직 구현
    setIsLogoutModalVisible(false);
    router.replace('/my-page');
  };

  const handleDeleteAccountPress = () => {
    ``;
    router.push('/settings/withdrawal-page');
  };

  const handleBackPress = () => {
    router.back();
  };

  if (!user) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="계정 설정" onBackPress={handleBackPress} />
      <AccountInfo user={user} />

      <View className="h-px mx-5 bg-grey-10" />

      <View className="flex-1 px-5 py-3">
        <Logout />
      </View>

      {/* 탈퇴하기 */}
      <DeleteAccount onDeleteAccountPress={handleDeleteAccountPress} />

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
