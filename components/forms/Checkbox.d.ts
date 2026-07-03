/** Rounded-square checkbox with check mark. Controlled or uncontrolled. */
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}
