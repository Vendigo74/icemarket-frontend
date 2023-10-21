export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	DETAILS = 'details',
	ORDER = 'order',
	ORDER_WAITING = 'orderWaiting',
	ORDER_FINISHED = 'orderFinished',
	PAYMENT = 'payment',
	// last
	NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.DETAILS]: '/details',
  [AppRoutes.ORDER]: '/order',
  [AppRoutes.ORDER_WAITING]: '/order-waiting',
  [AppRoutes.ORDER_FINISHED]: '/order-finished',
  [AppRoutes.PAYMENT]: '/payment',
  [AppRoutes.NOT_FOUND]: '*',
};