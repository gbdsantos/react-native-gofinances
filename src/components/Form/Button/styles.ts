import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  background-color: ${ ({ theme }) => theme.colors.secondary };
  border-radius: 5px;

  align-items: center;
  padding: 18px;

  width: 100%;
`;

export const Title = styled.Text`
  color: ${ ({ theme }) => theme.colors.shape };
  font-family: ${ ({ theme }) => theme.fonts.medium };
  font-size: ${RFValue(14)}px;
`;
