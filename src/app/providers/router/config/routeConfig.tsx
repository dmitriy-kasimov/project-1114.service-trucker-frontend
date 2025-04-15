import { RouteProps } from 'react-router-dom';
import {
    AppRoutes,
    getRouteCisterns,
    getRouteDumpTrucks,
    getRouteHeavyTrucks,
    getRouteTruckDetails,
    getRouteVans,
} from '@/shared/const/router';
import { UnlockedVansPage } from '@/pages/UnlockedVansPage';
import { TruckModulesPage } from '@/pages/TruckModulesPage';

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.VANS]: {
        path: getRouteVans(),
        element: <UnlockedVansPage />,
    },
    [AppRoutes.DUMP_TRUCKS]: {
        path: getRouteDumpTrucks(),
        element: <UnlockedVansPage />,
    },
    [AppRoutes.HEAVY_TRUCKS]: {
        path: getRouteHeavyTrucks(),
        element: <UnlockedVansPage />,
    },
    [AppRoutes.CISTERNS]: {
        path: getRouteCisterns(),
        element: <UnlockedVansPage />,
    },
    [AppRoutes.TRUCK_DETAILS]: {
        path: getRouteTruckDetails(':id'),
        element: <TruckModulesPage />,
    },
};
