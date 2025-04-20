import { z } from 'zod';

export const sajuInfoFormDataSchema = z.object({
  name: z.string().min(5, { message: '2자 이상의 실명을 입력해 주세요' }).max(6, {
    message: '6자 이하의 실명을 입력해 주세요',
  }),
  gender: z.enum(['male', 'female']),
  birthDate: z.string(),
  isLunarCalendar: z.boolean(),
  birthTime: z.string(),
  isBirthTimeUnknown: z.boolean(),
});

export type SajuInfoFormData = z.infer<typeof sajuInfoFormDataSchema>;
