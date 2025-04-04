import { FC, ReactElement } from 'react';
import { Card, Text } from '@project-1114/ui-kit';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';

import cls from './TruckCard.module.scss';
import { EntityCard } from '@/shared/components/EntityCard';

interface ITruckCard {
    id: number;
    name: string;
    model: TruckModels;
    buttonInteraction?: ReactElement;
}
export const TruckCard: FC<ITruckCard> = ({
    name,
    id,
    model,
    buttonInteraction,
}) => {
    return (
        <Card variant={'outlined'} id={`${id}`} contentMargin={'s'}>
            <EntityCard
                label={
                    <Text color={'secondary'} size={'l'}>
                        {name}
                    </Text>
                }
                img={
                    <img
                        src={TruckInfo[model].img}
                        alt={name}
                        decoding={'async'}
                        className={cls.img}
                    />
                }
                buttonInteraction={buttonInteraction}
            />
        </Card>
    );
};
