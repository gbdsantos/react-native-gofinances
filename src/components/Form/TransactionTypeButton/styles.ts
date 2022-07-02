import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconsProps {
  type: 'up' | 'down';
}

interface ContainerProps {
  isActive: boolean;
  type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-color: ${ ({ theme }) =>  theme.colors.text };
  border-radius: 5px;
  border-style: solid;
  border-width: ${ ({ isActive }) => isActive ? 0 : 1.5}px;

  margin-top: 10px;
  padding: 16px;
  width: 48%;

  ${ ({ isActive, type}) => isActive && type === 'up' && css`
    background-color: ${ ({ theme }) => theme.colors.success_light }
  `}

  ${ ({ isActive, type}) => isActive && type === 'down' && css`
    background-color: ${ ({ theme }) => theme.colors.attetion_light }
  `}
`;

export const Icon = styled(Feather)<IconsProps>`
  color: ${ ({ theme, type }) =>
    type === 'up' ? theme.colors.success: theme.colors.attention
  };
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${ ({ theme }) => theme.fonts.regular };
  font-size: ${RFValue(14)}px;
`;

