import Xarrow from 'react-xarrows';
import { TTruckModulesTree } from '../model/types/TTruckModulesTree.ts';

type ArrowsParentToChildrenProps = {
    tree: TTruckModulesTree;
};

export function ArrowsParentToChildren(props: ArrowsParentToChildrenProps) {
    const { tree } = props;

    return tree.children?.map((childTree) => (
        <Xarrow
            key={`${tree.name}->${childTree.name}`}
            start={`${tree.name}`} //can be react ref
            end={`${childTree.name}`} //or an id
            color={'var(--color-secondary)'}
            strokeWidth={1.5}
            path={'grid'}
        />
    ));
}
