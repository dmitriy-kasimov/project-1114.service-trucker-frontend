import { FC } from 'react';
import { TTruckModulesTree } from '@/widgets/TruckModulesTree/model/types/TTruckModulesTree.ts';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckCard } from '@/entities/TruckCard';

type TruckModulesTreeProps = {
    model: TruckModels;
    tree: TTruckModulesTree;
};

export const TruckModulesTree: FC<TruckModulesTreeProps> = ({
    model,
    tree,
}) => {
    return <TruckCard id={0} model={model} />;
};
