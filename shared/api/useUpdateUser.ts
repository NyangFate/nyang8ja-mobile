import { Class01UserAPIApi } from '@/openapi/apis';
import { UpdateUserInfoRequest } from '@/openapi/apis/Class01UserAPIApi';
import { Configuration } from '@/openapi/runtime';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useMutation } from '@tanstack/react-query';
export const useUpdateUser = () => {
  return useMutation({
    mutationFn: async (data: UpdateUserInfoRequest) => {
      const accessToken = await AsyncStorage.getItem('accessToken');

      const config = new Configuration({
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const api = new Class01UserAPIApi(accessToken ? config : undefined);

      const response = await api.updateUserInfo(data);

      return response;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
