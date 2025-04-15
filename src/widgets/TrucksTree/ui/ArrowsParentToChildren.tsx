import Xarrow from 'react-xarrows';
import { TTruckTree } from '../model/types/TTruckTree.ts';

type ArrowsParentToChildrenProps = {
    tree: TTruckTree;
};

export function ArrowsParentToChildren(props: ArrowsParentToChildrenProps) {
    const { tree } = props;

    return tree.children?.map((childTree) => {
        console.log(tree.model);
        console.log(document.getElementById(`${tree.model}`));
        console.log(childTree.model);
        console.log(document.getElementById(`${childTree.model}`));

        return (
            <Xarrow
                key={`${tree.model}->${childTree.model}`}
                start={`${tree.model}`} //can be react ref
                end={`${childTree.model}`} //or an id
                color={'var(--color-secondary)'}
                strokeWidth={2}
                startAnchor={'top'}
                endAnchor={'bottom'}
                curveness={0}
            />
        );
    });
}
