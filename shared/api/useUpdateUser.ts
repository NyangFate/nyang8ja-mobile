import { Class01UserAPIApi, Configuration, UpdateUserInfoRequest } from '@/openapi';
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

      const api = new Class01UserAPIApi(config);

      const response = await api.updateUserInfo(data);

      return response;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
