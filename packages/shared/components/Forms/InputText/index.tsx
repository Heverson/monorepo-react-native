import React from 'react';

import { TextInputProps } from 'react-native';

import {
 Container, 
 Input
} from './styles';

type Props = TextInputProps;


export function InputText({...rest}:Props){
  return (
    <Container>
        <Input {...rest} />
    </Container>
  )
}