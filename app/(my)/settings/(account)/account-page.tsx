import { User } from '@/pages/my/model/types';
import AccountInfo from '@/pages/settings-account/ui/account-info';
import DeleteAccount from '@/pages/settings-account/ui/delete-account';
import Header from '@/pages/settings-account/ui/header';
import Logout from '@/pages/settings-account/ui/logout';
import LogoutModal from '@/pages/settings-account/ui/logout-modal';
import { fakerKO as faker } from '@faker-js/faker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
export default function AccountPage() {
  const router = useRouter();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const user: User = {
    name: faker.person.fullName(),
    joinedAt: faker.date.past().toISOString(),
    signInMethod: 'apple',
    sajuInfo: {
      gender: 'male',
      birthDate: faker.date.past().toISOString(),
      isBirthTimeKnown: false,
    },
  };

  const handleLogoutPress = () => {
    setIsLogoutModalVisible(true);
  };

  const handleLogout = () => {
    // 로그아웃 로직 구현
    setIsLogoutModalVisible(false);
    router.replace('/my-page');
  };

  const handleDeleteAccountPress = () => {
    router.push('/settings/withdrawal-page');
  };

  const handleDeleteAccount = () => {
    // 계정 탈퇴 로직 구현
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header />
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
