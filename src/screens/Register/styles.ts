import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
  background-color: ${ ({ theme }) => theme.colors.primary };

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;

  height: ${RFValue(113)}px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${ ({theme}) => theme.colors.shape };
  font-family: ${ ({theme}) => theme.fonts.regular };
  font-size: ${RFValue(18)}px;
`;

export const Form = styled.View`
  flex: 1;
  padding: 24px;
  width: 100%;
`;
