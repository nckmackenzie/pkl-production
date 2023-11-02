// import logo from '@/assets/panesar.png';
import darkLogo from '@/assets/logo-dark.svg';
import lightLogo from '@/assets/logo-light.svg';
import lightLogo2 from '@/assets/Panesar-Primary-Logo-Black.svg';
import darkLogo2 from '@/assets/Panesar-Primary-Logo-Ivory.svg';
import { useTheme } from '@/context/theme-context';

export default function Logo() {
  const { theme } = useTheme();
  return (
    <img
      src={theme === 'light' ? lightLogo2 : darkLogo2}
      alt="panesar logo"
      className="h-14 w-28 mx-auto"
    />
  );
}
