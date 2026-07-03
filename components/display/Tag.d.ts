/** Selectable filter chip (sentence case), optional remove ×. */
export interface TagProps {
  selected?: boolean;
  onClick?: () => void;
  /** Shows a × that calls this */
  onRemove?: () => void;
  children?: React.ReactNode;
}
