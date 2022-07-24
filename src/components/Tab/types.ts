export interface ITabItemNavigatorProps {
  isActive: boolean;
}

export interface ITabProps {
  onChangeTab: (currentTab: string) => void;
}
