import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { AppRoutes, RoutePath } from '../types/router';

const routes: RouteRecordRaw[] = [
  {
    path: RoutePath.main,
    name: AppRoutes.MAIN,
    component: () => import('@/pages/MainPage.vue')
  },
  {
    path: RoutePath.about,
    name: AppRoutes.ABOUT,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/AboutPage.vue')
  },
  {
    path: RoutePath.details,
    name: AppRoutes.DETAILS,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/DetailsPage.vue')
  },
  {
    path: RoutePath.order,
    name: AppRoutes.ORDER,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/OrderPage.vue')
  },
  {
    path: RoutePath.payment,
    name: AppRoutes.PAYMENT,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/PaymentPage.vue')
  },
  {
    path: RoutePath.orderWaiting,
    name: AppRoutes.ORDER_WAITING,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/OrderWaitingPage.vue')
  },
  {
    path: RoutePath.orderFinished,
    name: AppRoutes.ORDER_FINISHED,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/OrderFinishedPage.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: AppRoutes.NOT_FOUND,
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/pages/NotFoundPage.vue')
  },
]

const appRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default appRouter;
