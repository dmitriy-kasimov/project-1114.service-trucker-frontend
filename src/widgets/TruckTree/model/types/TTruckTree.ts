import { TTruckModuleState } from '@/entities/TruckModuleCard';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';

export type TTruckTree = {
    model: TruckModuleModels;
    name: string;
    state: TTruckModuleState;
    children?: TTruckTree[];
};
