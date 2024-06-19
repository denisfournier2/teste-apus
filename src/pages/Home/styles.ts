import styled, { keyframes } from 'styled-components';

const spinAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Content = styled.section`

`;

export const ButtonContainer = styled.div`
  width: 30%;
  height: 50px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  .icon-container {
    &.loading {
      animation: ${spinAnimation} 1s infinite linear;
    }
  }
  @media (max-width: 320px) {
    width: 50%;
  }
`;
