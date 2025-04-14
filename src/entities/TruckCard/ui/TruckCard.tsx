import { FC, ReactElement } from 'react';
import { Card, Icon, Text, Tooltip } from '@project-1114/ui-kit';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';

import cls from './TruckCard.module.scss';
import { TruckTooltip } from '@/entities/TruckCard/ui/TruckTooltip.tsx';

import InfoIcon from '@/shared/assets/icons/InfoIcon.svg?react';

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
                    <div className={cls.imgWrapper}>
                        <img
                            src={TruckInfo[model].img}
                            alt={name}
                            decoding={'async'}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.Info}>
                        <Tooltip
                            content={<TruckTooltip name={name} />}
                            direction={'bottom'}
                        >
                            <Icon
                                Svg={InfoIcon}
                                fill={'var(--color-accent)'}
                                width={32}
                                height={32}
                            />
                        </Tooltip>
                    </div>
                </Card>
                {buttonInteraction}
            </div>
        </div>
    );
};
