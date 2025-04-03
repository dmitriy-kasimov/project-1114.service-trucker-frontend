import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TTruckModuleState } from '@/widgets/TruckModulesTree/model/types/TTruckModuleState.ts';

export type TTruckModulesTree = {
    model: TruckModuleModels;
    name: string;
    state: TTruckModuleState;
    children?: TTruckModulesTree[];
};
