import { FC } from 'react';
import { TruckCard } from '@/entities/TruckCard';
import { UnlockedTruckButton } from '@/features/UnlockedTruckButton';
import Xarrow from 'react-xarrows';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TTruckState } from '@/shared/types/TTruckState.ts';
import { TTruckTree } from '@/widgets/TruckTree/model/types/TTruckTree.ts';

type TruckCurrentProps = {
    name: string;
    model: TruckModels;
    img?: string;
    state: TTruckState;
    tree: TTruckTree[];
};

export const TruckCurrent: FC<TruckCurrentProps> = ({
    name,
    model,
    img,
    tree,
    state,
}) => {
    return (
        <>
            <TruckCard
                id={228}
                img={img}
                name={name}
                model={model}
                buttonInteraction={
                    <UnlockedTruckButton
                        model={model}
                        state={state}
                        name={name}
                        img={img}
                    />
                }
            />
            {tree.map((module) => (
                <Xarrow
                    key={`${name}->${module.name}`}
                    start={`228`} //can be react ref
                    end={`${module.name}`} //or an id
                    color={'var(--color-secondary)'}
                    strokeWidth={1.5}
                    startAnchor={'top'}
                    endAnchor={'bottom'}
                    path={'grid'}
                />
            ))}
        </>
    );
};
