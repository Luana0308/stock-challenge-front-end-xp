import styled from 'styled-components';

export const Container = styled.div`
  left: 0;
  right: 0;

  margin-left: auto;
  margin-right: auto;

  position: absolute;
  width: 100%;
  height: 100%;

  background-color: black;

  opacity: 0.5;
`;

export const ContainerContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;
