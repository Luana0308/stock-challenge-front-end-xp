import styled from 'styled-components';

export const Container = styled.main`
  background-color: #e0fbfc;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const ContentForm = styled.div`
  width: 40%;
  height: 100%;
  background-color: #3d5a80;
  border: 2px solid #3d5a80;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Aside = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: calc(100% - 230px);
  }
`;

export const MainButton = styled.button`
  margin-top: 10px;
  background-color: #ced4da;
  width: 250px;
  font-size: 15px;
  outline: none;
  border-radius: 50px;
  :hover {
    border: 2px solid #000814;
    color: #003566;
  }
  :enabled {
    border: 2px solid #000814;
    background-color: #89b0ae;
    color: #000814;
  }
`;
