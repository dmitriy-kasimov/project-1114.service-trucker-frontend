import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TTruckState } from '@/shared/types/TTruckState.ts';

export type TTrucksTree = {
    model: TruckModels;
    state: TTruckState;
    children?: TTrucksTree[];
};
