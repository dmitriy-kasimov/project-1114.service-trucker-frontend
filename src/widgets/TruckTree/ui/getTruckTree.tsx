import { TTruckTree } from '@/widgets/TruckTree/model/types/TTruckTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { TruckModuleCard } from '@/entities/TruckModuleCard';
import { ArrowsParentToChildren } from './ArrowsParentToChildren.tsx';
import { TruckModuleButton } from '@/features/TruckModuleButton';

export const getTruckTree = (tree: TTruckTree[]) => {
    return tree.map((node) => (
        <VStack align={'center'} style={{ gap: '8rem' }}>
            {node.modules ? (
                <HStack gap={'m'} align={'end'}>
                    {getTruckTree(node.modules)}
                    <ArrowsParentToChildren tree={node} />
                </HStack>
            ) : null}
            <TruckModuleCard
                id={node.name}
                model={node.model}
                name={node.name}
                buttonInteraction={
                    <TruckModuleButton
                        model={node.model}
                        name={node.name}
                        state={node.state}
                    />
                }
            />
        </VStack>
    ));
};
