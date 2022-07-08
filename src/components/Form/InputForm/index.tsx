import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';

import { Input } from '../Input';

import {
  Container,
  Error
} from './styles';

interface Props extends TextInputProps {
  control: Control;
  error: string | any;
  name: string;
}

export function InputForm({
  control,
  error,
  name,
  ...rest
}: Props){
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value }}) => (
          <Input
            onChangeText={onChange}
            {...rest}
            value={value}
        />
        )}
      />
      { error && <Error>{ error }</Error> }
    </Container>
  );
}
