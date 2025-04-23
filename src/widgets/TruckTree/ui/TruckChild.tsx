import { FC } from 'react';
import { TruckCard } from '@/entities/TruckCard';
import Xarrow from 'react-xarrows';
import { TTruckTree } from '../model/types/TTruckTree';

type TruckChildProps = {
    node: TTruckTree;
};

export const TruckChild: FC<TruckChildProps> = ({ node }) => {
    return (
        <>
            {node.child ? (
                <>
                    <TruckCard
                        id={node.child.model}
                        model={node.child.model}
                        name={node.child.name}
                    />
                    <Xarrow
                        key={`${node.name}->${node.child.name}`}
                        start={`${node.name}`} //can be react ref
                        end={`${node.child.model}`} //or an id
                        color={'var(--color-secondary)'}
                        strokeWidth={1.5}
                        path={'grid'}
                    />
                </>
            ) : null}
        </>
    );
};
