import styled from 'styled-components/native';

type Props = {
  background?: string;
};

export const Container = styled.View<Props>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: ${({ theme, background }) => background || theme.COLORS.BACKGROUND};
`;
