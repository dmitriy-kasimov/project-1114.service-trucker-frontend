import { FC } from 'react';
import { TTruckModulesTree } from '@/widgets/TruckModulesTree/model/types/TTruckModulesTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { getTruckModulesTree } from '@/widgets/TruckModulesTree/ui/getTruckModulesTree.tsx';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckCard } from '@/entities/TruckCard';
import { TTruckState } from '@/shared/types/TTruckState.ts';
import Xarrow from 'react-xarrows';
import { UnlockedTruckButton } from '@/features/UnlockedTruckButton';
import cls from './TruckModulesTree.module.scss';

type TruckModulesTreeProps = {
    name: string;
    model: TruckModels;
    state: TTruckState;
    tree: TTruckModulesTree[];
};

export const TruckModulesTree: FC<TruckModulesTreeProps> = ({
    name,
    model,
    tree,
    state,
}) => {
    return (
        <VStack
            align={'center'}
            gap={'xl'}
            style={{ gap: '8rem' }}
            className={cls.TruckModulesTree}
        >
            <HStack gap={'xl'} align={'end'}>
                {getTruckModulesTree(tree)}
            </HStack>
            <TruckCard
                id={228}
                name={name}
                model={model}
                buttonInteraction={
                    <UnlockedTruckButton
                        model={model}
                        state={state}
                        name={name}
                    />
                }
            />
            {tree.map((module) => (
                <Xarrow
                    key={`${name}->${module.name}`}
                    start={`228`} //can be react ref
                    end={`${module.name}`} //or an id
                    color={'white'}
                    strokeWidth={2}
                    startAnchor={'top'}
                    endAnchor={'bottom'}
                    curveness={0}
                />
            ))}
        </VStack>
    );
};
