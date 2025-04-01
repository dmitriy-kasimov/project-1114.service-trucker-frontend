import { TTrucksTree } from '../model/types/TTrucksTree.ts';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';
import { TruckCard } from '@/entities/TruckCard';
import { HStack, VStack } from '@project-1114/ui-kit';
import Xarrow from 'react-xarrows';

export const getTrucksTree = (trees: TTrucksTree[]) => {
    return trees.map((tree) => (
        <HStack gap={'xl'}>
            <TruckCard
                id={TruckInfo[tree.model].name}
                model={tree.model}
                state={tree.state}
            />
            {tree.children ? (
                <VStack gap={'l'}>
                    {getTrucksTree(tree.children)}
                    {tree.children.map((childTree) => (
                        <Xarrow
                            start={TruckInfo[tree.model].name} //can be react ref
                            end={TruckInfo[childTree.model].name} //or an id
                            color={'white'}
                            strokeWidth={2}
                        />
                    ))}
                </VStack>
            ) : null}
        </HStack>
    ));
};
