import { FC } from 'react';
import { TTruckTree } from '@/widgets/TruckTree/model/types/TTruckTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { getTruckTree } from '@/widgets/TruckTree/ui/getTruckTree.tsx';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TTruckState } from '@/shared/types/TTruckState.ts';
import { TruckCurrent } from '@/widgets/TruckTree/ui/TruckCurrent.tsx';
import { TTrucksTree } from '@/widgets/TrucksTree';
import { TruckParents } from './TruckParents';

type TruckModulesTreeProps = {
    name: string;
    model: TruckModels;
    img?: string;
    state: TTruckState;
    tree: TTruckTree[];
    parents?: TTrucksTree[];
};

export const TruckTree: FC<TruckModulesTreeProps> = ({
    name,
    model,
    img,
    tree,
    state,
    parents,
}) => {
    return (
        <VStack
            align={'center'}
            gap={'xl'}
            style={{ gap: '8rem', position: 'relative' }}
        >
            <HStack gap={'xl'} align={'end'}>
                {getTruckTree(tree)}
            </HStack>
            <TruckCurrent
                state={state}
                name={name}
                model={model}
                tree={tree}
                img={img}
            />
            <TruckParents parents={parents} />
        </VStack>
    );
};
