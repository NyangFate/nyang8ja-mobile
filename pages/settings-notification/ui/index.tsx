import { UserNotificationResponseDto } from '@/openapi/models';
import Header from '@/shared/ui/header';
import COLORS from '@/shared/utils/colors';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, Switch, Text, View } from 'react-native';
import useEditNotification from '../api/useEditNotification';
import useNotification from '../api/useNotification';

export default function Notification() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { data: notification } = useNotification();
  const { mutate: editNotification } = useEditNotification();
  const handleEventNotificationOnChange = ({
    value,
    notification,
  }: {
    value: boolean;
    notification: UserNotificationResponseDto;
  }) => {
    if (!notification) return;

    const newData = {
      ...notification,
      event: {
        news: value,
      },
    };

    editNotification(newData);
    queryClient.setQueryData(['notification'], newData);
  };

  const handleFortuneNotificationOnChange = ({
    value,
    notification,
  }: {
    value: boolean;
    notification: UserNotificationResponseDto;
  }) => {
    if (!notification) return;

    const newData = {
      ...notification,
      service: {
        fortune: value,
      },
    };

    editNotification(newData);
    queryClient.setQueryData(['notification'], newData);
  };

  const handleBackPress = () => {
    router.back();
  };

  if (!notification) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="알림 설정" onBackPress={handleBackPress} />

      {/* 혜택 및 이벤트 섹션 */}
      <View className="px-5 py-3">
        <Text className="text-body1 text-grey-50 font-suit-regular">혜택 및 이벤트</Text>
        <View className="flex-row items-center justify-between py-3">
          <Text className="text-body3 text-grey-70 font-suit-regular">이벤트 소식</Text>
          <Switch
            trackColor={{ false: COLORS.grey[10], true: COLORS.primary['03'] }}
            thumbColor={COLORS.white}
            onValueChange={() =>
              handleEventNotificationOnChange({
                value: !notification.event.news,
                notification: notification,
              })
            }
            value={notification.event.news}
          />
        </View>
      </View>

      {/* 구분선 */}
      <View className="h-3 bg-grey-10" />

      {/* 서비스 알림 섹션 */}
      <View className="px-5 py-6">
        <Text className="text-body1 text-grey-50 font-suit-regular">서비스 알림</Text>
        <View className="flex-row items-center justify-between py-3">
          <Text className="text-body3 text-grey-70 font-suit-regular">오늘의 운세</Text>
          <Switch
            trackColor={{ false: COLORS.grey[10], true: COLORS.primary['03'] }}
            thumbColor={COLORS.white}
            onValueChange={() =>
              handleFortuneNotificationOnChange({
                value: !notification.service.fortune,
                notification: notification,
              })
            }
            value={notification.service.fortune}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
