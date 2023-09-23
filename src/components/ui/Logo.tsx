// import logo from '@/assets/panesar.png';
import darkLogo from '@/assets/logo-dark.svg';
import lightLogo from '@/assets/logo-light.svg';
import { useTheme } from '@/context/theme-context';

export default function Logo() {
  const { theme } = useTheme();
  return (
    <img
      src={theme === 'light' ? lightLogo : darkLogo}
      alt="panesar logo"
      className="h-14 w-28 mx-auto"
    />
  );
}
