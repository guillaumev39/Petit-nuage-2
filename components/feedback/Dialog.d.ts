/** Centered modal on a navy scrim (no blur), 32px radius. */
export interface DialogProps {
  open: boolean;
  title?: string;
  onClose?: () => void;
  /** Buttons row, right-aligned */
  actions?: React.ReactNode;
  width?: number;
  children?: React.ReactNode;
}
