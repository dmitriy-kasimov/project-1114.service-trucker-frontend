import { FC, HTMLAttributes } from 'react';
import { Text } from '@project-1114/ui-kit';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';

import cls from './TruckCard.module.scss';
import { TTruckState } from '@/shared/types/TTruckState.ts';
import { EntityCard } from '@/shared/components/EntityCard';
import { TruckInteractionButton } from '@/entities/TruckCard';

interface ITruckCard extends HTMLAttributes<HTMLDivElement> {
    model: TruckModels;
    state: TTruckState;
}
export const TruckCard: FC<ITruckCard> = ({ model, state, ...props }) => {
    return (
        <EntityCard
            label={
                <Text color={'secondary'} size={'l'}>
                    {TruckInfo[model].name}
                </Text>
            }
            img={
                <img
                    src={TruckInfo[model].img}
                    alt={TruckInfo[model].name}
                    decoding={'async'}
                    className={cls.img}
                    {...props}
                />
            }
            buttonInteraction={
                <TruckInteractionButton model={model} state={state} />
            }
        />
    );
};
