import { TTrucksTree } from '../model/types/TTrucksTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { ArrowsParentToChildren } from './ArrowsParentToChildren.tsx';
import { TruckCard } from '@/entities/TruckCard';
import { UnlockedTruckButton } from '@/features/UnlockedTruckButton';
import { getRouteTruckDetails } from '@/shared/const/router.ts';

export const getTrucksTree = (tree: TTrucksTree[]) => {
    return tree.map((node) => (
        <VStack
            key={node.model}
            align={'center'}
            style={{ gap: '8rem', position: 'relative' }}
        >
            {node.children ? (
                <HStack align={'end'} style={{ gap: '8rem' }}>
                    {getTrucksTree(node.children)}
                    <ArrowsParentToChildren tree={node} />
                </HStack>
            ) : null}
            <TruckCard
                name={node.name}
                id={node.model}
                model={node.model}
                buttonInteraction={
                    <UnlockedTruckButton
                        model={node.model}
                        state={node.state}
                        name={node.name}
                    />
                }
                link={getRouteTruckDetails(`${node.model}`)}
            />
        </VStack>
    ));
};
