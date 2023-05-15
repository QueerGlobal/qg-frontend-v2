import styled from 'styled-components';

export const BottomImagesContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 5;

  & img:first-child {
    position: absolute;
    top: 2400px;
    left: 0px;
    width: 49%;
  }

  & img:last-child {
    position: absolute;
    top: 2400px;
    left: 250px;
    width: 49%;
  }
`;
