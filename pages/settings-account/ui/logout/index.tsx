import LogoutIcon from '@/assets/svgs/logout.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, Text } from 'react-native';
import LogoutModal from '../logout-modal';

export default function Logout() {
  const router = useRouter();
  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);
  const queryClient = useQueryClient();

  const handleLogout = async () => {
    setIsLogoutModalVisible(false);
    await AsyncStorage.removeItem('accessToken');
    queryClient.invalidateQueries();
    router.replace('/(my)/my-page');
  };

  const handleLogoutPress = () => {
    setIsLogoutModalVisible(true);
  };

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
