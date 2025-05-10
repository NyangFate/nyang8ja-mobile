import { Class01UserAPIApi } from '@/openapi/apis';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';

export default function useUser() {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');
      const api = new Class01UserAPIApi(
        new Configuration({
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
      );

      const res = await api.getUserInfo();
      return res;
    },
  });
}
