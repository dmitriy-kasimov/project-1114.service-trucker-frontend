import Xarrow from 'react-xarrows';
import { TTruckTree } from '../model/types/TTruckTree.ts';

type ArrowsParentToChildrenProps = {
    tree: TTruckTree;
};

export function ArrowsParentToChildren(props: ArrowsParentToChildrenProps) {
    const { tree } = props;
    console.log(tree);
    return tree.children?.map((childTree) => (
        <Xarrow
            key={`${tree.model}->${childTree.model}`}
            start={`${tree.model}`} //can be react ref
            end={`${childTree.model}`} //or an id
            color={'white'}
            strokeWidth={2}
            startAnchor={'top'}
            endAnchor={'bottom'}
        />
    ));
}
