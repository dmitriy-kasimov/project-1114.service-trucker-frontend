import { FC, ReactElement } from 'react';
import { Text } from '@project-1114/ui-kit';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';

import cls from './TruckCard.module.scss';
import { EntityCard } from '@/shared/components/EntityCard';

interface ITruckCard {
    id: number;
    model: TruckModels;
    buttonInteraction?: ReactElement;
}
export const TruckCard: FC<ITruckCard> = ({ id, model, buttonInteraction }) => {
    return (
        <EntityCard
            label={
                <Text color={'secondary'} size={'l'}>
                    {TruckInfo[model].name}
                </Text>
            }
            img={
                <img
                    id={`${id}`}
                    src={TruckInfo[model].img}
                    alt={TruckInfo[model].name}
                    decoding={'async'}
                    className={cls.img}
                />
            }
            buttonInteraction={buttonInteraction}
        />
    );
};
