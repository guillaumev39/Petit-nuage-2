/** Radio with sky dot. Group via shared name. */
export interface RadioProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (value?: string) => void;
}
