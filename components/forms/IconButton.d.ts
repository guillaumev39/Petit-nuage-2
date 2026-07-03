/** Round icon-only button (cart, favorites, close). Requires an aria label. */
export interface IconButtonProps {
  /** Accessible name, e.g. "Ajouter aux favoris" */
  label: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'soft' | 'ghost' | 'solid';
  /** The icon node (Lucide 18–22px) */
  children?: React.ReactNode;
  onClick?: () => void;
}
