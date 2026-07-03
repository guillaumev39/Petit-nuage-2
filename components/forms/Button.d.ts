/** Pill-shaped action button. Primary = solid sky; sentence-case French labels. */
export interface ButtonProps {
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Control height: 34 / 44 / 52px */
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  /** Optional leading icon node (Lucide, 16–18px) */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: () => void;
}
