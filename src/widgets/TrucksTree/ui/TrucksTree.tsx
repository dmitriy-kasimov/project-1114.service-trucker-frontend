import { FC } from 'react';
import { TTruckTree } from '../model/types/TTruckTree.ts';
import { getTrucksTree } from './getTrucksTree.tsx';

type TrucksTreeProps = {
    tree: TTruckTree[];
};

export const TrucksTree: FC<TrucksTreeProps> = ({ tree }) =>
    getTrucksTree(tree);
