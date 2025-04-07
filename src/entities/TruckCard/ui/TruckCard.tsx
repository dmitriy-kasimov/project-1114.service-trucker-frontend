import { FC, ReactElement } from 'react';
import { Text } from '@project-1114/ui-kit';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';

import cls from './TruckCard.module.scss';
import { EntityCard } from '@/shared/components/EntityCard';
import { TruckTooltip } from '@/entities/TruckCard/ui/TruckTooltip.tsx';

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
        <EntityCard
            id={`${id}`}
            label={
                <Text color={'secondary'} size={'xl'}>
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
            tooltip={<TruckTooltip name={name} model={model} />}
        />
    );
};
