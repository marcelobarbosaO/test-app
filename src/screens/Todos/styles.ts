import styled from 'styled-components/native';
import { Surface } from '@react-native-material/core';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const List = styled.FlatList`
  flex: 1;
  padding: 20px;
`;

export const ContentItem = styled(Surface)`
  margin-bottom: 20px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  padding: 30px 20px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: #000;
  margin-left: 10px;
  flex: 1;
`;
