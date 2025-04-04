import { TTruckTree } from '../model/types/TTruckTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { ArrowsParentToChildren } from './ArrowsParentToChildren.tsx';
import { TruckCard } from '@/entities/TruckCard';
import { UnlockedTruckButton } from '@/features/UnlockedTruckButton';

export const getTrucksTree = (tree: TTruckTree[]) => {
    return tree.map((node) => (
        <HStack gap={'xl'} key={node.model}>
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
            {node.children ? (
                <VStack gap={'l'}>
                    {getTrucksTree(node.children)}
                    <ArrowsParentToChildren tree={node} />
                </VStack>
            ) : null}
        </HStack>
    ));
};
