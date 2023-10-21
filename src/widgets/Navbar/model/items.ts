import { RoutePath } from "@/app/provider/router";


export interface NavbarItemType {
	path: string;
	text: string;
}


export const navbarItemList: NavbarItemType[] = [
  {
    path: RoutePath.main,
    text: 'Главная',
  },
  {
    path: RoutePath.about,
    text: 'О нас',
  },
  {
    path: RoutePath.details,
    text: 'Детали товара',
  },
  {
    path: RoutePath.order,
    text: 'Заказ товара',
  },
  {
    path: RoutePath.orderWaiting,
    text: 'Ожидание процесса',
  },
  {
    path: RoutePath.orderFinished,
    text: 'Заказ завершен',
  },
  {
    path: RoutePath.payment,
    text: 'Оплата',
  },
];