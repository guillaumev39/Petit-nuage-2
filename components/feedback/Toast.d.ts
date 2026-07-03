/** Floating pill notification. Position it yourself (fixed bottom-center). */
export interface ToastProps {
  open?: boolean;
  tone?: 'success' | 'error' | 'info';
  children?: React.ReactNode;
}
