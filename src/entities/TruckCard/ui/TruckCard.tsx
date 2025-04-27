import { FC, ReactElement } from 'react';
import {
    AppImage,
    Card,
    Icon,
    Skeleton,
    Text,
    Tooltip,
} from '@project-1114/ui-kit';
import { TruckModels } from '@/shared/const/TruckModels.ts';

import cls from './TruckCard.module.scss';
import { TruckTooltip } from '@/entities/TruckCard/ui/TruckTooltip.tsx';

import InfoIcon from '@/shared/assets/icons/InfoIcon.svg?react';
import { Link } from 'react-router-dom';

interface ITruckCard {
    id: number;
    name: string;
    model: TruckModels;
    buttonInteraction?: ReactElement;
    link?: string;
    img?: string;
}
export const TruckCard: FC<ITruckCard> = ({
    name,
    id,
    buttonInteraction,
    link,
    img,
}) => {
    const TruckAvatar = (
        <AppImage
            fallback={<Skeleton width={'16rem'} height={'16rem'} />}
            src={img || ''}
            alt={name}
            decoding={'async'}
            className={cls.img}
        />
    );

    return (
        <div id={`${id}`} className={cls.EntityCardWrapper}>
            <div className={cls.EntityCard}>
                <Card
                    padding={'0'}
                    className={cls.Card}
                    variant={'transparent'}
                >
                    <div className={cls.imgWrapper}>
                        {link ? (
                            <Link to={link}>{TruckAvatar}</Link>
                        ) : (
                            TruckAvatar
                        )}
                    </div>
                    <Text weight={'600'} size={'xl'} className={cls.Name}>
                        {name}
                    </Text>
                    <div className={cls.Info}>
                        <Tooltip content={<TruckTooltip name={name} />}>
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
