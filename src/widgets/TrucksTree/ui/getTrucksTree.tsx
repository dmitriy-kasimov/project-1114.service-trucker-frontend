import { TTruckTree } from '../model/types/TTruckTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { ArrowsParentToChildren } from './ArrowsParentToChildren.tsx';
import { TruckCard } from '@/entities/TruckCard';
import { UnlockedTruckButton } from '@/features/UnlockedTruckButton';

export const getTrucksTree = (tree: TTruckTree[]) => {
    return tree.map((node) => (
        <VStack gap={'xl'} key={node.model} align={'center'}>
            {node.children ? (
                <HStack gap={'l'} align={'end'}>
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
            />
        </VStack>
    ));
};
