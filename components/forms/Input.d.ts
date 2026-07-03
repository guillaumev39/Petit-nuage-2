/** Pill text input with label, hint and error states. */
export interface InputProps {
  label?: string;
  /** Muted helper under the field */
  hint?: string;
  /** Coral error message; also colors the border */
  error?: string;
  placeholder?: string;
  value?: string;
  type?: string;
  onChange?: (e: any) => void;
}
