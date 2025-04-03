import { TTruckTree } from '../model/types/TTruckTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { TruckCard } from '@/entities/TruckCard';
import { ArrowsParentToChildren } from './ArrowsParentToChildren.tsx';

export const getTrucksTree = (tree: TTruckTree[]) => {
    return tree.map((node) => (
        <HStack gap={'xl'} key={node.model}>
            <TruckCard id={node.model} model={node.model} state={node.state} />
            {node.children ? (
                <VStack gap={'l'}>
                    {getTrucksTree(node.children)}
                    <ArrowsParentToChildren tree={node} />
                </VStack>
            ) : null}
        </HStack>
    ));
};
