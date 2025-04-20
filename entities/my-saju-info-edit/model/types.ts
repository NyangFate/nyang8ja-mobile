import { z } from 'zod';

export const sajuInfoFormDataSchema = z.object({
  name: z
    .string({
      required_error: '2자 이상의 실명을 입력해 주세요',
    })
    .min(2, { message: '2자 이상의 실명을 입력해 주세요' })
    .max(6, {
      message: '6자 이하의 실명을 입력해 주세요',
    }),
  gender: z.enum(['male', 'female']),
  birthDate: z
    .string({
      required_error: '생년월일을 입력해 주세요',
    }) // YYYY.MM.DD 형식 검사 (정규식)
    .regex(/^\d{4}\.\d{2}\.\d{2}$/, { message: '날짜는 YYYY.MM.DD 형식으로 입력해주세요' })
    .transform((val) => {
      // YYYY.MM.DD -> YYYY-MM-DD 로 변환 (Zod date() 메서드를 위함)
      return val.replace(/\./g, '-');
    })
    // date() 메서드는 YYYY-MM-DD 형식을 검증하고 유효한 날짜인지 확인
    .pipe(z.string().date('유효하지 않은 날짜입니다'))
    // 추가로 연도 범위 체크
    .refine(
      (dateStr) => {
        const date = new Date(dateStr);
        const year = date.getFullYear();

        // 연도 범위 체크 (1900년부터 현재 연도까지)
        const currentYear = new Date().getFullYear();
        return year >= 1900 && year <= currentYear;
      },
      { message: '1900년부터 현재까지의 날짜만 입력 가능합니다' }
    ),

  isLunarCalendar: z.boolean(),
  birthTime: z
    .string({
      required_error: '태어난 시간을 입력해 주세요',
    })
    .refine(
      (value) => {
        console.log('value', value);
        if (value === '모름') return true;
        const regex = /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/;
        return regex.test(value);
      },
      { message: '올바른 시간 형식(HH:MM)을 입력해주세요.' }
    ),
  isBirthTimeUnknown: z.boolean(),
});

export type SajuInfoFormData = z.infer<typeof sajuInfoFormDataSchema>;
