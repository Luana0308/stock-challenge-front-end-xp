import styled from 'styled-components';
import { ITabItemNavigatorProps } from './types';

export const Tab = styled.div`
  background: #cae9ff;
  margin: 4px 4px;
  padding: 16px 16px;
  color: black;
  border-radius: 2px;
`;

export const TabNavigation = styled.ul`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid white;
  border-radius: 4px;
  padding: 0 0;
`;

export const TabItemNavigator = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 50%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;
  background: ${(props: ITabItemNavigatorProps) =>
    props.isActive ? '#3d5a80' : 'transparent'};
  color: black;

  :hover {
    background: white;
    color: black;
  }

  li.active {
    background: white;
    color: black;
  }
`;
