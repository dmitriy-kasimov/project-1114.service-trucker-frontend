import { TTrucksTree } from '../model/types/TTrucksTree.ts';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';
import { TruckCard } from '@/entities/TruckCard';
import { HStack, VStack } from '@project-1114/ui-kit';

export const getTrucksTree = (trees: TTrucksTree[]) => {
    return trees.map((tree) => (
        <HStack gap={'xl'}>
            <TruckCard
                id={TruckInfo[tree.model].name}
                model={tree.model}
                state={tree.state}
            />
            {tree.children ? (
                <VStack gap={'l'}>{getTrucksTree(tree.children)}</VStack>
            ) : null}
        </HStack>
    ));
};
