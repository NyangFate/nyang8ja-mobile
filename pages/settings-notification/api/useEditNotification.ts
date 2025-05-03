import { UserNotificationUpdateRequestDto } from '@/openapi';
import { Class01UserAPIApi } from '@/openapi/apis';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

export default function useEditNotification() {
  return useMutation({
    mutationFn: async (data: UserNotificationUpdateRequestDto) => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const config = new Configuration({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const api = new Class01UserAPIApi(config);

      const res = await api.updateNotificationSettings({
        userNotificationUpdateRequestDto: data,
      });

      return res;
    },
  });
}
