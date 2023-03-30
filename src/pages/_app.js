import '@/styles/globals.css'
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { CssBaseline } from '@mui/material';

const cache=createCache({key:'css',prepend:true});

export default function App({ Component, pageProps }) {
  return(
    <CacheProvider value={cache}>
      <CssBaseline/>
      <Component {...pageProps} />
    </CacheProvider>
  ) 
}
