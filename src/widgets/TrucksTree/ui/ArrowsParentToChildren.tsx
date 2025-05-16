import Xarrow from 'react-xarrows';
import { TTrucksTree } from '../model/types/TTrucksTree.ts';

type ArrowsParentToChildrenProps = {
    tree: TTrucksTree;
};

export function ArrowsParentToChildren(props: ArrowsParentToChildrenProps) {
    const { tree } = props;

    return tree.children?.map((childTree) => {
        return (
            <Xarrow
                key={`${tree.model}->${childTree.model}`}
                start={`${tree.model}`} //can be react ref
                end={`${childTree.model}`} //or an id
                color={'var(--color-secondary)'}
                strokeWidth={2}
                startAnchor={'top'}
                endAnchor={'bottom'}
                path={'grid'}
                dashness={!childTree.state.unlocked}
                divContainerStyle={{
                    opacity: !childTree.state.unlocked ? 0.5 : 1,
                }}
            />
        );
    });
}
