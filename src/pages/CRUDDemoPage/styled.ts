import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.rem(16)};
`;

export const StyledGroupBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-left: ${({ theme }) => theme.rem(4)};
  }
`;

export const StyledTitle = styled.div`
  font-size: ${({ theme }) => theme.rem(20)};
  line-height: ${({ theme }) => theme.rem(20)};
  display: flex;
  align-items: center;
`;
