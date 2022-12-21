import type { AppProps } from 'next/app'
import '../styles/globals.css'
import ProvidersWrapper from './ProviderWrapper'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ProvidersWrapper>
    <Component {...pageProps} />
  </ProvidersWrapper>
)} 
