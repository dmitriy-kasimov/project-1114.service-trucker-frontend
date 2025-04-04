import { FC } from 'react';
import { TTruckModulesTree } from '@/widgets/TruckModulesTree/model/types/TTruckModulesTree.ts';
import { Card, HStack, VStack } from '@project-1114/ui-kit';
import { getTruckModulesTree } from '@/widgets/TruckModulesTree/ui/getTruckModulesTree.tsx';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckCard } from '@/entities/TruckCard';
import { TruckInteractionButton } from '@/features/TruckInteractionButton';
import { TTruckState } from '@/shared/types/TTruckState.ts';
import Xarrow from 'react-xarrows';

type TruckModulesTreeProps = {
    name: string;
    model: TruckModels;
    state: TTruckState;
    tree: TTruckModulesTree[];
};

export const TruckModulesTree: FC<TruckModulesTreeProps> = ({
    name,
    model,
    tree,
    state,
}) => {
    return (
        <Card style={{ background: 'black' }}>
            <HStack align={'center'} gap={'xl'}>
                <TruckCard
                    id={228}
                    name={name}
                    model={model}
                    buttonInteraction={
                        <TruckInteractionButton
                            model={model}
                            state={state}
                            name={name}
                        />
                    }
                />
                <VStack gap={'xs'}>{getTruckModulesTree(tree)}</VStack>
                {tree.map((module) => (
                    <Xarrow
                        key={`${name}->${module.name}`}
                        start={`228`} //can be react ref
                        end={`${module.name}`} //or an id
                        color={'white'}
                        strokeWidth={2}
                        startAnchor={'right'}
                        endAnchor={'left'}
                    />
                ))}
            </HStack>
        </Card>
    );
};
