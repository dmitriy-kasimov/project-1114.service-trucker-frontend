import { TTruckModulesTree } from '@/widgets/TruckModulesTree/model/types/TTruckModulesTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { TruckModuleCard } from '@/entities/TruckModuleCard/ui/TruckModuleCard.tsx';
import { ArrowsParentToChildren } from './ArrowsParentToChildren.tsx';
import { TruckModuleButton } from '@/features/TruckModuleButton';

export const getTruckModulesTree = (tree: TTruckModulesTree[]) => {
    return tree.map((node) => (
        <HStack gap={'xl'}>
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
            {node.children ? (
                <VStack gap={'m'}>
                    {getTruckModulesTree(node.children)}
                    <ArrowsParentToChildren tree={node} />
                </VStack>
            ) : null}
        </HStack>
    ));
};
