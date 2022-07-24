export interface ButtonProps {
  onClick?: () => void;
  title: string;
  type: 'button' | 'submit' | 'reset' | undefined;
  disabled?: boolean;
}
