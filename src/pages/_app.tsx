import type { AppProps } from 'next/app';
import { withTRPC } from '@trpc/next';
import { AppRouter } from '../server/routers/_app';
import superjson from 'superjson';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default withTRPC<AppRouter>({
  config() {
    return {
      url: '/api/trpc', // L'URL de l'API tRPC côté serveur
      transformer: superjson, // Sérialisation des données pour tRPC
    };
  },
  ssr: false, // Désactiver le rendu côté serveur pour tRPC (peut être activé si nécessaire)
})(MyApp);
