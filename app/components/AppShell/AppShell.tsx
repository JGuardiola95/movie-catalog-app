import navBackIcon from '@ui5/webcomponents-icons/dist/nav-back.js';
import HeartIcon from '@ui5/webcomponents-icons/dist/heart.js';
import { usePathname, useRouter } from 'next/navigation';
import { Avatar, Button, ShellBar, ShellBarItem, Title, ThemeProvider } from '@ui5/webcomponents-react';
import { ReactNode } from 'react';

import styles from './AppShell.module.css';

type AppShellProps = {
  children?: ReactNode | ReactNode[];
};

export const AppShell = ({ children }: AppShellProps) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <ThemeProvider staticCssInjected>
      <ShellBar
        logo={<Avatar initials="JG" size="XS" />}
        primaryTitle="José Guardiola Coding Challenge : Movie Catalog App"
        startButton={
          pathname !== '/' && (
            <Button
              icon={navBackIcon}
              onClick={() => {
                router.back();
              }}
            />
          )
        }
      >
        <ShellBarItem
          icon={HeartIcon}
          text="My Favorites"
          onClick={() => {
            router.push('/favorites');
          }}
        />
      </ShellBar>
      <div className={styles.appShell}>{children}</div>
    </ThemeProvider>
  );
};
