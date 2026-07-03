/** Pill segmented tabs on a soft sky track. */
export interface TabsProps {
  tabs?: string[];
  active?: string;
  defaultActive?: string;
  onChange?: (tab: string) => void;
}
