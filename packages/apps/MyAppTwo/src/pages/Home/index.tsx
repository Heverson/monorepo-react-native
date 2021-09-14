import { Button, InputText } from '@monorepoBWBS/components';
import React from 'react';

import {
 Container, 
 Title, 
 SubTitle, 
} from './styles';

export function Home(){
  return (
    <Container>
        <Title>MyAppTwo</Title>
        <SubTitle>monorepo-react-native</SubTitle>
        <InputText placeholder="Type here" />
        <Button text="Click me" />
    </Container>
  )
}