import { TTruckModuleState } from '@/entities/TruckModuleCard';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TTrucksTree } from '@/widgets/TrucksTree';

export type TTruckTree = {
    model: TruckModuleModels;
    name: string;
    img?: string;
    state: TTruckModuleState;
    modules?: TTruckTree[];
    child?: TTrucksTree;
};
