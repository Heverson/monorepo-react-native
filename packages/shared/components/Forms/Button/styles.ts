import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const ButtonContainer = styled(RectButton)`
  background-color: #ff9000;

  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 16px;

  color: #fff;
`;