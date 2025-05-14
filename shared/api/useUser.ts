import { Class01UserAPIApi } from '@/openapi/apis';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';

export default function useUser() {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');

      const config = accessToken
        ? new Configuration({
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
        : undefined;

      const api = new Class01UserAPIApi(config);

      const res = await api.getUserInfo();

      return res.name ? { ...res, name: res.name === 'NONE' ? '김팔자' : res.name } : null;
    },
  });
}
