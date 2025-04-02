import Xarrow from 'react-xarrows';
import { TEntitiesTree } from '../model/types/TEntitiesTree.ts';

type ArrowsParentToChildrenProps<T, K> = {
    tree: TEntitiesTree<T, K>;
};

export function ArrowsParentToChildren<T, K>(
    props: ArrowsParentToChildrenProps<T, K>,
) {
    const { tree } = props;

    return tree.children?.map((childTree) => (
        <Xarrow
            key={`${tree.model}->${childTree.model}`}
            start={`${tree.model}`} //can be react ref
            end={`${childTree.model}`} //or an id
            color={'white'}
            strokeWidth={2}
        />
    ));
}
