import { Class01UserAPIApi, UpdateNotificationSettingsRequest } from '@/openapi/apis';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

export default function useUpdateNotification() {
  return useMutation({
    mutationFn: async (data: UpdateNotificationSettingsRequest) => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const config = new Configuration({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const api = new Class01UserAPIApi(accessToken ? config : undefined);

      const res = await api.updateNotificationSettings({ body: data.body });

      return res;
    },
  });
}
