import { FC, ReactElement } from 'react';
import { Card, Text, Tooltip } from '@project-1114/ui-kit';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';

import cls from './TruckCard.module.scss';
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
        <div id={`${id}`} className={cls.EntityCardWrapper}>
            <div className={cls.EntityCard}>
                <Text color={'secondary'} size={'xl'}>
                    {name}
                </Text>

                <Card padding={'0'} className={cls.Card} variant={'outlined'}>
                    <img
                        src={TruckInfo[model].img}
                        alt={name}
                        decoding={'async'}
                        className={cls.img}
                    />
                    <div className={cls.Info}>
                        <Tooltip
                            content={<TruckTooltip name={name} model={model} />}
                            direction={'bottom'}
                        >
                            <Text color={'main'} size={'l'} weight={'600'}>
                                Info
                            </Text>
                        </Tooltip>
                    </div>
                </Card>
                {buttonInteraction}
            </div>
        </div>
    );
};
