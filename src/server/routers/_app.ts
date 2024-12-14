import { router } from '../trpc'; // Importez votre helper tRPC
import { listingRouter } from './listing'; // Routeur pour les annonces
import { userRouter } from './user'; // Routeur pour les utilisateurs (si disponible)

export const appRouter = router({
  listing: listingRouter, // Regroupe les routes liées aux annonces
  user: userRouter, // Regroupe les routes liées aux utilisateurs (si défini)
});

// Exportez le type AppRouter pour une utilisation avec le client tRPC
export type AppRouter = typeof appRouter;
