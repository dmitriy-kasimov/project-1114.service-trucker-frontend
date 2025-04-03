import { FC } from 'react';
import { TTruckTree } from '../model/types/TTruckTree.ts';
import { getTrucksTree } from './getTrucksTree.tsx';
import { Card } from '@project-1114/ui-kit';

type TrucksTreeProps = {
    tree: TTruckTree[];
};

export const TrucksTree: FC<TrucksTreeProps> = ({ tree }) => (
    <Card style={{ background: 'black' }}>{getTrucksTree(tree)}</Card>
);
