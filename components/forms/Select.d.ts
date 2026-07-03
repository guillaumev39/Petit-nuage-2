/** Pill select with chevron; options as strings or {value,label}. */
export interface SelectProps {
  label?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: any) => void;
}
