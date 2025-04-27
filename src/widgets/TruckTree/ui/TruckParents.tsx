import { FC } from 'react';
import { TTrucksTree } from '@/widgets/TrucksTree';
import { HStack } from '@project-1114/ui-kit';
import { TruckCard } from '@/entities/TruckCard';
import { UnlockedTruckButton } from '@/features/UnlockedTruckButton';
import Xarrow from 'react-xarrows';
import { getRouteTruckDetails } from '@/shared/const/router.ts';

type TruckParentsProps = {
    parents?: TTrucksTree[];
};

export const TruckParents: FC<TruckParentsProps> = ({ parents }) => {
    if (!parents) return null;
    return (
        <HStack gap={'xl'} align={'end'} key={'Z'}>
            {parents.map((parent) => (
                <>
                    <TruckCard
                        key={`${parent.name}`}
                        id={parent.model}
                        name={parent.name}
                        model={parent.model}
                        img={parent.img}
                        buttonInteraction={
                            <UnlockedTruckButton
                                model={parent.model}
                                state={parent.state}
                                name={parent.name}
                                img={parent.img}
                            />
                        }
                        size={'s'}
                        link={getRouteTruckDetails(`${parent.model}`)}
                    />
                    <Xarrow
                        key={`${parent.name} -> ${228}`}
                        start={`${parent.model}`} //or an id
                        end={`228`} //can be react ref
                        color={'var(--color-secondary)'}
                        strokeWidth={2}
                        startAnchor={'top'}
                        endAnchor={'bottom'}
                        path={'grid'}
                    />
                </>
            ))}
        </HStack>
    );
};
