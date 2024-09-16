'use client';

import './globals.css';
import '@ui5/webcomponents-react/styles.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppShell } from './components';
import { StoreProvider } from './context/storeContext';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <html lang="en">
      <head>
        <script
          data-ui5-config
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              theme: 'sap_horizon',
            }),
          }}
        />
      </head>
      <body>
        <div>
          <StoreProvider>
            <QueryClientProvider client={queryClient}>
              <AppShell>{children}</AppShell>
            </QueryClientProvider>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
