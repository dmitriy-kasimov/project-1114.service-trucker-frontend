import { FC } from 'react';
import { TTruckTree } from '@/widgets/TruckTree/model/types/TTruckTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { getTruckTree } from '@/widgets/TruckTree/ui/getTruckTree.tsx';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckCard } from '@/entities/TruckCard';
import { TTruckState } from '@/shared/types/TTruckState.ts';
import Xarrow from 'react-xarrows';
import { UnlockedTruckButton } from '@/features/UnlockedTruckButton';

type TruckModulesTreeProps = {
    name: string;
    model: TruckModels;
    state: TTruckState;
    tree: TTruckTree[];
};

export const TruckTree: FC<TruckModulesTreeProps> = ({
    name,
    model,
    tree,
    state,
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
                    color={'var(--color-secondary)'}
                    strokeWidth={2}
                    startAnchor={'top'}
                    endAnchor={'bottom'}
                    path={'grid'}
                />
            ))}
        </VStack>
    );
};
