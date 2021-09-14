import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import {
 Container,
 ButtonContainer,
 Text 
} from './styles';

interface ButtonProps extends RectButtonProps {
  text: string;
}

export function Button({text, ...rest}:ButtonProps){
  return (
    <Container>
      <ButtonContainer {...rest} >
        <Text>{text}</Text>
      </ButtonContainer>
    </Container>
  )
}