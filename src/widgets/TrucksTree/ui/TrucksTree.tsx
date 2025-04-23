import { FC } from 'react';
import { TTrucksTree } from '../model/types/TTrucksTree.ts';
import { getTrucksTree } from './getTrucksTree.tsx';

type TrucksTreeProps = {
    tree: TTrucksTree[];
};

export const TrucksTree: FC<TrucksTreeProps> = ({ tree }) =>
    getTrucksTree(tree);
