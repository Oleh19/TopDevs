import { ItemDetailPage } from '../../../pages/ItemDetailPage';
import { MainPage } from '../../../pages/MainPage/index';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  ITEM_DETAIL = 'itemDetail',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ITEM_DETAIL]: '/product/:id',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ITEM_DETAIL]: {
    path: RoutePath.itemDetail,
    element: <ItemDetailPage />,
  },
};
