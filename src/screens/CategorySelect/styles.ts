import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${ ({ theme }) => theme.colors.background };
`;

export const Header = styled.View`
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;

  background-color: ${ ({ theme }) => theme.colors.primary };
  height: ${RFValue(113)}px;
  width: 100%;
`;

export const Title = styled.Text`
  color: ${ ({ theme }) => theme.colors.shape };
  font-family: ${ ({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(18)}px;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;

  padding: ${RFValue(15)}px;
  width: 100%;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${ ({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  background-color: ${ ({ theme }) => theme.colors.text };
  height: 1px;
  width: 100%;
`;

export const Footer = styled.View`
  padding: 24px;
  width: 100%;
`;
