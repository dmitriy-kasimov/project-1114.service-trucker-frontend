import { TTrucksTree } from '../model/types/TTrucksTree.ts';
import Xarrow from 'react-xarrows';
import { FC } from 'react';

type ArrowsParentToChildrenProps = {
    tree: TTrucksTree;
};
export const ArrowsParentToChildren: FC<ArrowsParentToChildrenProps> = ({
    tree,
}) =>
    tree.children?.map((childTree) => (
        <Xarrow
            key={`${tree.model}->${childTree.model}`}
            start={`${tree.model}`} //can be react ref
            end={`${childTree.model}`} //or an id
            color={'white'}
            strokeWidth={2}
        />
    ));
