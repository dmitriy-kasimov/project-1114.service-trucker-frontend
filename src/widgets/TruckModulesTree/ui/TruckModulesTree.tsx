import { FC } from 'react';
import { TTruckModulesTree } from '@/widgets/TruckModulesTree/model/types/TTruckModulesTree.ts';
import { Card, HStack, VStack } from '@project-1114/ui-kit';
import { getTruckModulesTree } from '@/widgets/TruckModulesTree/ui/getTruckModulesTree.tsx';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckCard } from '@/entities/TruckCard';

type TruckModulesTreeProps = {
    model: TruckModels;
    tree: TTruckModulesTree[];
};

export const TruckModulesTree: FC<TruckModulesTreeProps> = ({
    model,
    tree,
}) => {
    return (
        <Card style={{ background: 'white' }}>
            <HStack align={'center'} gap={'xl'}>
                <TruckCard id={228} model={model} />
                <VStack gap={'xs'}>{getTruckModulesTree(tree)}</VStack>
            </HStack>
        </Card>
    );
};
