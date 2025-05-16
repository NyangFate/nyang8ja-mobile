import { Class02DivinationAPIApi } from '@/openapi/apis';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery } from '@tanstack/react-query';

export default function useFortuneDetails(id: string) {
  return useQuery({
    queryKey: ['fortuneDetails'],
    queryFn: async () => {
      const accessToken = await AsyncStorage.getItem('accessToken');

      const config = new Configuration({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const api = new Class02DivinationAPIApi(config);

      try {
        const res = await api.getDivinationQuestionDetail({
          questionId: id,
        });
        return res;
      } catch (error) {
        console.error(error);
      }
    },
  });
}
