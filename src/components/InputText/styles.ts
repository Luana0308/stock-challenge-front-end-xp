import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  height: 100%;
  height: 30px;
  border-style: none;
  ::placeholder {
    color: #adb5bd;
  }
  color: #003566;
  margin-left: 4px;
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-radius: 4px;
  border: 2px solid #adb5bd;
  margin-bottom: 4px;
`;

export const ContainerLeftIcon = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  margin-left: 4px;
`;

export const ContainerRigthIcon = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  margin-rigth: 4px;
`;
