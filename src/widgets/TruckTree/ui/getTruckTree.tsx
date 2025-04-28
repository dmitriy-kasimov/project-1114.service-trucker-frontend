import { TTruckTree } from '@/widgets/TruckTree/model/types/TTruckTree.ts';
import { HStack, VStack } from '@project-1114/ui-kit';
import { TruckModuleCard } from '@/entities/TruckModuleCard';
import { ArrowsParentToChildren } from './ArrowsParentToChildren.tsx';
import { TruckModuleButton } from '@/features/TruckModuleButton';
import { TruckChild } from '@/widgets/TruckTree/ui/TruckChild.tsx';

export const getTruckTree = (tree: TTruckTree[]) => {
    return tree.map((node) => (
        <VStack key={node.name} align={'center'} style={{ gap: '4rem' }}>
            <TruckChild node={node} />
            {node.modules ? (
                <HStack gap={'m'} align={'end'}>
                    {getTruckTree(node.modules)}
                    <ArrowsParentToChildren tree={node} />
                </HStack>
            ) : null}
            <TruckModuleCard
                id={node.name}
                img={node.img}
                name={node.name}
                buttonInteraction={
                    <TruckModuleButton
                        name={node.name}
                        state={node.state}
                        img={node.img}
                    />
                }
            />
        </VStack>
    ));
};
