import { TTrucksTree } from '../model/types/TTrucksTree.ts';
import { TruckCard } from '@/entities/TruckCard';
import { HStack, VStack } from '@project-1114/ui-kit';
import { ArrowsParentToChildren } from '@/widgets/TreeTrucks/ui/ArrowsParentToChildren.tsx';

export const getTrucksTree = (trees: TTrucksTree[]) => {
    return trees.map((tree) => (
        <HStack gap={'xl'} key={tree.model}>
            <TruckCard
                id={`${tree.model}`}
                model={tree.model}
                state={tree.state}
            />
            {tree.children ? (
                <VStack gap={'l'}>
                    {getTrucksTree(tree.children)}
                    <ArrowsParentToChildren tree={tree} />
                </VStack>
            ) : null}
        </HStack>
    ));
};
