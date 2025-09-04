export const checkElementVisibility = (
  element: HTMLElement | null, offset: number = 0
): boolean => {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  return rect.top + offset >= 0 && rect.bottom - offset <= window.innerHeight;
};
