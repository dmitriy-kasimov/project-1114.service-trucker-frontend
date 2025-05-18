import { FC } from 'react';
import { TruckCard } from '@/entities/TruckCard';
import Xarrow from 'react-xarrows';
import { TTruckTree } from '../model/types/TTruckTree';
import { UnlockedTruckButton } from '@/features/UnlockedTruckButton';
import { getRouteTruckDetails } from '@/shared/const/router.ts';

type TruckChildProps = {
    node: TTruckTree;
};

export const TruckChild: FC<TruckChildProps> = ({ node }) => {
    const truck = node.child;
    if (!truck) return null;
    return (
        <>
            <TruckCard
                id={truck.model}
                model={truck.model}
                img={truck.img}
                name={truck.name}
                transparent={!truck.state.unlocked}
                buttonInteraction={
                    <UnlockedTruckButton
                        model={truck.model}
                        name={truck.name}
                        state={truck.state}
                        img={truck.img}
                    />
                }
                size={'s'}
                link={getRouteTruckDetails(`${truck.model}`)}
            />
            <Xarrow
                key={`${node.name}->${truck.name}`}
                start={`${node.name}`} //can be react ref
                end={`${truck.model}`} //or an id
                color={'var(--color-secondary)'}
                strokeWidth={2}
                path={'grid'}
                dashness={!truck.state.unlocked}
                divContainerStyle={{
                    opacity: !truck.state.unlocked ? 0.5 : 1,
                }}
            />
        </>
    );
};
