import Xarrow from 'react-xarrows';
import { TTruckTree } from '../model/types/TTruckTree.ts';

type ArrowsParentToChildrenProps = {
    tree: TTruckTree;
};

export function ArrowsParentToChildren(props: ArrowsParentToChildrenProps) {
    const { tree } = props;

    return tree.modules?.map((childTree) => (
        <Xarrow
            key={`${tree.name}->${childTree.name}`}
            start={`${tree.name}`} //can be react ref
            end={`${childTree.name}`} //or an id
            color={'var(--color-secondary)'}
            strokeWidth={1.5}
            path={'grid'}
            dashness={!childTree.state.unlocked}
            divContainerStyle={{
                opacity: !childTree.state.unlocked ? 0.5 : 1,
            }}
        />
    ));
}
