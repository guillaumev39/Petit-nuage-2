/** Quiet 12px-radius surface. shadow | outline | soft (wool) | jouy. */
export interface CardProps {
  variant?: 'shadow' | 'outline' | 'soft' | 'jouy';
  /** CSS padding, default 24px */
  padding?: string;
  /** Lift 4px + stronger shadow on hover (product cards) */
  hoverLift?: boolean;
  children?: React.ReactNode;
}
