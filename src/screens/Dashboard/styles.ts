import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'; 

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background };
`

export const UserWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  padding: 0 24px;
  
  width: 100%;
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary };
  
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  height: ${RFPercentage(42)}px;
  width: 100%;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const Photo = styled.Image`
  border-radius: 10px;

  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
`;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(18)}px;
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape };
  font-family: ${({ theme }) => theme.fonts.bold };
  font-size: ${RFValue(18)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary };
  font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  width: 100%;

  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex: 1;
  margin-top: ${RFPercentage(12)}px;
  padding: 0 24px;
`; 

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(18)}px;
  margin-bottom: 16px;
`;