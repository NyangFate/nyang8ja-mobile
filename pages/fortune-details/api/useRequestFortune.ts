import { Class02DivinationAPIApi } from '@/openapi/apis';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';

export default function useRequestFortune() {
  return useMutation({
    mutationFn: async (questionId: number) => {
      const accessToken = await AsyncStorage.getItem('accessToken');

      const config = new Configuration({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const api = new Class02DivinationAPIApi(accessToken ? config : undefined);

      const res = await api.takeDivination({
        questionId: questionId,
      });

      return res;
    },
  });
}
