import { Class01UserAPIApi, Configuration } from '@/openapi';
import { UserWithdrawalRequestDtoReasonEnum } from '@/openapi/models/UserWithdrawalRequestDto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'expo-router';
export default function useWithdrawAccount() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: async (params: {
      reason: UserWithdrawalRequestDtoReasonEnum[];
      detail?: string;
    }) => {
      const accessToken = await AsyncStorage.getItem('accessToken');

      try {
        const config = new Configuration({
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const api = new Class01UserAPIApi(config);

        const response = await api.deleteUser({
          userWithdrawalRequestDto: {
            detail: params.detail,
            reason: params.reason,
          },
        });

        return response;
      } catch (error) {
        console.log(error);
      }
    },
    onSuccess: async () => {
      await AsyncStorage.removeItem('accessToken');
      queryClient.invalidateQueries();
    },
  });
}
