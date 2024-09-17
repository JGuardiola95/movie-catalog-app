import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import HeartIcon from '@ui5/webcomponents-icons/dist/heart.js';
import { usePathname, useRouter } from 'next/navigation';
import { Avatar, Button, ThemeProvider, Bar } from '@ui5/webcomponents-react';
import { ReactNode } from 'react';

import styles from './AppShell.module.css';

type AppShellProps = {
  children?: ReactNode | ReactNode[];
};

export const AppShell = ({ children }: AppShellProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBackClick = () => {
    router.back();
  };

  const handleFavoritesClick = () => {
    router.push('/favorites');
  };

  return (
    <ThemeProvider staticCssInjected>
      <Bar
        design="Header"
        startContent={
          <div className={styles.startContent}>
            {pathname !== '/' && <Button icon={navBackIcon} onClick={handleBackClick} />}
            <Avatar initials="JG" size="XS" />
            <strong>José Guardiola Coding Challenge : Movie Catalog App</strong>
          </div>
        }
        endContent={
          <Button icon={HeartIcon} design="Transparent" onClick={handleFavoritesClick}>
            My favorites
          </Button>
        }
      ></Bar>
      <div className={styles.appShell}>{children}</div>
    </ThemeProvider>
  );
};
