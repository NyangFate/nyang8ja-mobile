import { UserNotificationCategoryDto } from '@/openapi/models/UserNotificationCategoryDto';
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

  const handleValueChange = ({ value, key }: { value: boolean; key: string }) => {
    if (!notification) return;

    const newData: UserNotificationCategoryDto[] = notification.map((section) => ({
      ...section,
      items: section.items.map((item) => (item.key === key ? { ...item, enabled: value } : item)),
    }));

    editNotification({ body: { key, value } });
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

      {notification.map((section, index) => (
        <React.Fragment key={section.key}>
          <View className="px-5 py-3">
            <Text className="text-body1 text-grey-50 font-suit-regular">{section.label}</Text>
            {section.items.map((item) => (
              <View className="flex-row items-center justify-between py-3" key={item.key}>
                <Text className="text-body3 text-grey-70 font-suit-regular">{item.label}</Text>
                <Switch
                  trackColor={{ false: COLORS.grey[10], true: COLORS.primary['03'] }}
                  thumbColor={COLORS.white}
                  onValueChange={() =>
                    handleValueChange({
                      value: !item.enabled,
                      key: item.key,
                    })
                  }
                  value={item.enabled}
                />
              </View>
            ))}
          </View>
          {/* 구분선 */}
          {index !== notification.length - 1 && <View className="h-3 bg-grey-10" />}
        </React.Fragment>
      ))}
    </SafeAreaView>
  );
}
