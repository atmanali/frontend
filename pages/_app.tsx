import { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter/';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Props as TopBarItemProps } from '../components/TopBar/TopBarItem';
import TopBar from '../components/TopBar/TopBar';
import { ThemeProvider } from '@mui/material';
import theme from '../styles/theme';

const queryClient = new QueryClient();
export default function App({ Component, pageProps }: AppProps) {
    const topBarItems: TopBarItemProps[] = [
        {
            title: 'Résultats',
            selected: true,
        },
        {
            title: 'Calendrier',
            selected: false,
        },
        {
            title: 'Messagerie',
            selected: false,
        },
        {
            title: 'Informations',
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
            <ThemeProvider theme={theme} >
                <TopBar topBarItems={topBarItems} />
                <main style={{position: 'relative', top: '4rem'}}>
                    <Component {...pageProps} />
                </main>
            </ThemeProvider>
        </AppCacheProvider>
    </QueryClientProvider>
  );
}
