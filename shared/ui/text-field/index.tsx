import COLORS from '@/shared/utils/colors';
import React, { forwardRef } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';
import cn from '../../utils/cn';

export interface TextFieldProps extends TextInputProps {
  className?: string;
  containerClassName?: string;
  error?: boolean;
}

const TextField = forwardRef<TextInput, TextFieldProps>(
  ({ className, containerClassName, error, placeholder, ...props }, ref) => {
    return (
      <View
        className={cn(
          'px-3 py-2 bg-grey-00 rounded-lg',
          error && 'border border-error',
          containerClassName
        )}
      >
        <TextInput
          ref={ref}
          className={cn('text-body3 font-suit-regular align-top pt-0 pb-0', className)}
          placeholder={placeholder}
          placeholderTextColor={COLORS.grey[30]}
          {...props}
        />
      </View>
    );
  }
);

export default TextField;
