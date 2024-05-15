import '../styles/normalize.css';
import '../styles/globals.css';
import { theme } from '../styles/theme';

import { AppProps } from 'next/app';
import React, { useState } from 'react';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter/';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Props as TopBarItemProps } from '../components/TopBar/TopBarItem';
import TopBar from '../components/TopBar/TopBar';
import { ThemeProvider } from '@mui/material';
import Authentication from '../components/Authentication/Authentication';
const queryClient = new QueryClient();


const initialTopBarItems: TopBarItemProps[] = [
    { title: 'Résultats', href: 'results', },
    { title: 'Calendrier', href: 'calendar', },
    { title: 'Messagerie', href: 'messaging', },
    { title: 'Informations', href: 'information', }
]


export default function App({ Component, pageProps }: AppProps) {
  const [topBarItems, setTopBarItems] = useState(initialTopBarItems);

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
                <TopBar topBarItems={topBarItems} setTopBarItems={setTopBarItems} />
                <main id={'main'}>
                    <Authentication>
                        <div id={'content'}>
                            <Component {...pageProps} />
                        </div>
                    </Authentication>
                </main>
            </ThemeProvider>
        </AppCacheProvider>
    </QueryClientProvider>
  );
}
