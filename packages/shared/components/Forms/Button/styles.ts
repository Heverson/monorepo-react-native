import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;

  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled(RectButton)`
  background-color: #ff9000;

  width: 100%;

  justify-content: center;

  padding: 12px;
  margin: 10px 0;
`;

export const Text = styled.Text`
  font-size: 16px;

  color: #fff;

  text-align: center;
`;