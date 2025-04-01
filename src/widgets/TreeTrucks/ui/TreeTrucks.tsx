import { FC } from 'react';

import cls from './TreeTrucks.module.scss';
import { TTrucksTree } from '../model/types/TTrucksTree.ts';
import { getTrucksTree } from '@/widgets/TreeTrucks/helpers/getTrucksTree.tsx';

type TreeTrucksProps = {
    trees: TTrucksTree[];
};

export const TreeTrucks: FC<TreeTrucksProps> = ({ trees }) => {
    return <div className={cls.Layout}>{getTrucksTree(trees)}</div>;
};
