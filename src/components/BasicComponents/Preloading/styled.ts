import styled, { keyframes } from 'styled-components';

export const PreloadingStyled = styled.div`
  width: 5rem;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const loaderCircle = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const loaderBlink = keyframes`
  50% { opacity: 1; }
  100% { opacity: 0.3; }
`;

export const CircleLoadingStyled = styled.div`
  content: '';
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: inline-block;
  font-size: 0 !important;
  text-indent: -9999em !important;
  border-radius: 50% !important;
  border-top: 0.8rem solid ${({ theme }) => theme.COLORS.GRAY_16} !important;
  border-right: 0.8rem solid ${({ theme }) => theme.COLORS.GRAY_16} !important;
  border-bottom: 0.8rem solid ${({ theme }) => theme.COLORS.GRAY_16} !important;
  border-left: 0.8rem solid ${({ theme }) => theme.COLORS.DARK_BLUE} !important;
  transform: translateZ(0);
  animation: ${loaderCircle} 0.7s infinite linear;
`;

export const TextInfoStyled = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  padding-top: 0.8rem;
  animation: ${loaderBlink} 0.7s infinite linear;
`;
