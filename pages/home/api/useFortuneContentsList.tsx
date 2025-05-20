import { Class02DivinationAPIApi } from '@/openapi/apis';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';

export default function useFortuneContentsList() {
  return useQuery({
    queryKey: ['fortuneContentsList'],
    queryFn: async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');

      const config = new Configuration({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const api = new Class02DivinationAPIApi(accessToken ? config : undefined);
      try {
        const res = await api.getDivinationQuestions({
          request: {
            pageSize: 10,
          },
        });
        console.log(res);
        return res;
      } catch (error) {
        console.error(error);
      }
    },
  });
}
