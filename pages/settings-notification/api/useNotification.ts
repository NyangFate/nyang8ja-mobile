import { Class01UserAPIApi } from '@/openapi/apis';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';

export default function useNotification() {
  return useQuery({
    queryKey: ['notification'],
    queryFn: async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const config = new Configuration({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const api = new Class01UserAPIApi(accessToken ? config : undefined);

      const res = await api.getNotificationSettings();

      return res;
    },
  });
}
