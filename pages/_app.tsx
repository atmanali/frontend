import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter/';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Props as TopBarItemProps } from '../components/TopBar/TopBarItem';
import TopBar from '../components/TopBar/TopBar';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
    const topBarItems: TopBarItemProps[] = [
        {
            title: 'ok',
            selected: true,
        },
        {
            title: 'nok',
            selected: false,
        }
    ]
  return (
    <QueryClientProvider client={queryClient}>
        <AppCacheProvider>
            <Head>
              <meta charSet="UTF-8"></meta>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>
            <TopBar topBarItems={topBarItems} />
            <main style={{position: 'relative', top: '4rem'}}>
                <Component {...pageProps} />
            </main>
        </AppCacheProvider>
    </QueryClientProvider>
  );
}
