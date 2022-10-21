import styled from 'styled-components/native';

export interface TypographyProps {
  size?: number;
  weight?: number;
  color?: string;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
  children: string;
}

export const Typography = styled.Text<Omit<TypographyProps, 'children'>>`
  font-size: ${({ size }) => size || 14}px;
  font-weight: ${({ weight }) => weight || 400};
  color: ${({ color, theme }) => color || theme.COLORS.BLACK};
  margin-left: ${({ ml }) => ml || 0}px;
  margin-right: ${({ mr }) => mr || 0}px;
  margin-top: ${({ mt }) => mt || 0}px;
  margin-bottom: ${({ mb }) => mb || 0}px;
  flex: 1;
`;
