import styled from 'styled-components';

export const ButtonStyled = styled.button`
  background-color: #1266f1;
  opacity: ${(props) => (props.disabled ? 0.5 : 1.0)};
  color: white;
  font-size: 14px;
  padding: 10px 40px;
  border-radius: 5px;
  margin: 10px 10px;
  cursor: pointer;
`;
