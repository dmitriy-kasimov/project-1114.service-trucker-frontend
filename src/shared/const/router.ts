export enum AppRoutes {
    VANS,
    DUMP_TRUCKS,
    HEAVY_TRUCKS,
    CISTERNS,
}

export const getRouteVans = () => '*';
export const getRouteDumpTrucks = () => '/dump-trucks';
export const getRouteHeavyTrucks = () => '/heavy-trucks';
export const getRouteCisterns = () => '/cisterns';
