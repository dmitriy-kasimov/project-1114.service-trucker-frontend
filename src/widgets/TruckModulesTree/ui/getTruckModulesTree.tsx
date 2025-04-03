import { TTruckModulesTree } from '@/widgets/TruckModulesTree/model/types/TTruckModulesTree.ts';
import { HStack } from '@project-1114/ui-kit';

export const getTruckModulesTree = (tree: TTruckModulesTree[]) => {
    return tree.map((node) => <HStack gap={'l'}></HStack>);
};
