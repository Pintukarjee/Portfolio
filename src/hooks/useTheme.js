import { useState } from 'react';
import { themes } from '../theme/themes';

export function useTheme() {
  const [isDark, setIsDark] = useState(true);
  const t = isDark ? themes.dark : themes.light;
  const toggleTheme = () => setIsDark(prev => !prev);
  return { isDark, t, toggleTheme };
}