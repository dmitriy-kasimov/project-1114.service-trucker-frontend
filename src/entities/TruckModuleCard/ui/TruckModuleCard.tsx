import { FC, ReactElement } from 'react';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { EntityCard } from '@/shared/components/EntityCard';
import { Card, Text } from '@project-1114/ui-kit';
import { TruckModulesInfo } from '@/shared/const/TruckModulesInfo.tsx';

type TruckModuleCardProps = {
    id: string;
    model: TruckModuleModels;
    name: string;
    buttonInteraction?: ReactElement;
};

export const TruckModuleCard: FC<TruckModuleCardProps> = ({
    id,
    model,
    name,
    buttonInteraction,
}) => {
    return (
        <Card variant={'outlined'} id={id} contentMargin={'s'}>
            <EntityCard
                label={<Text size={'m'}>{name}</Text>}
                img={TruckModulesInfo[model].icon}
                buttonInteraction={buttonInteraction}
            />
        </Card>
    );
};
