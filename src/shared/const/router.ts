export enum AppRoutes {
    VANS,
    DUMP_TRUCKS,
    HEAVY_TRUCKS,
    CISTERNS,
    TRUCK_DETAILS,
}

export const getRouteVans = () => '/vans';
export const getRouteDumpTrucks = () => '/dump-trucks';
export const getRouteHeavyTrucks = () => '/heavy-trucks';
export const getRouteCisterns = () => '/cisterns';
export const getRouteTruckDetails = (id: string) => `/truck-details/${id}`;
