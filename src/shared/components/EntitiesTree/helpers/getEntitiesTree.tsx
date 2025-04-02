import { TEntitiesTree } from '@/shared/components/EntitiesTree/model/types/TEntitiesTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { ArrowsParentToChildren } from '../ui/ArrowsParentToChildren.tsx';
import { cloneElement, ReactElement } from 'react';

export function getEntitiesTree<T, K>(
    trees: TEntitiesTree<T, K>[],
    leaf: ReactElement,
) {
    return trees.map((tree) => {
        const props = {
            id: `${tree.model}`,
            model: tree.model,
            state: tree.state,
        };
        return (
            <HStack gap={'xl'} key={props.id}>
                {cloneElement(leaf, { ...props })}
                {tree.children ? (
                    <VStack gap={'l'}>
                        {getEntitiesTree(tree.children, leaf)}
                        <ArrowsParentToChildren tree={tree} />
                    </VStack>
                ) : null}
            </HStack>
        );
    });
}
