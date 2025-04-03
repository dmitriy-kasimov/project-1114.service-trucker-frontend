import { TTruckState } from '@/shared/types/TTruckState.ts';

type TModuleSet = {
    set?: boolean;
};
export type TTruckModuleState = TModuleSet & TTruckState;
