import styled, { css } from 'styled-components/native';
import { FontAwesome } from '@expo/vector-icons';

export interface CheckBoxProps {
  active: boolean;
}

export const Container = styled.View<CheckBoxProps>`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.SUBTEXT};
  position: relative;
  align-items: center;
  justify-content: center;

  ${({ active }) => {
    if (active)
      return css`
        background: ${({ theme }) => theme.COLORS.PRIMARY};
        border-color: ${({ theme }) => theme.COLORS.PRIMARY};
      `;
  }}
`;

export const Icon = styled(FontAwesome)`
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
