import { FC, ReactElement } from 'react';
import {
    AppImage,
    Card,
    Icon,
    Skeleton,
    Text,
    Tooltip,
} from '@project-1114/ui-kit';
import cls from './TruckModuleCard.module.scss';
import InfoIcon from '@/shared/assets/icons/InfoIcon.svg?react';
import { TruckModuleTooltip } from '@/entities/TruckModuleCard/ui/TruckModuleTooltip.tsx';
type TruckModuleCardProps = {
    id: string;
    name: string;
    img: string;
    buttonInteraction?: ReactElement;
};

export const TruckModuleCard: FC<TruckModuleCardProps> = ({
    id,
    name,
    img,
    buttonInteraction,
}) => {
    const ModuleAvatar = (
        <AppImage
            fallback={<Skeleton width={'6rem'} height={'6rem'} />}
            src={img || ''}
            alt={name}
            decoding={'async'}
            className={cls.img}
        />
    );
    return (
        <div id={id} className={cls.EntityCardWrapper}>
            <div className={cls.EntityCard}>
                <Card padding={'0'} className={cls.Card}>
                    <div className={cls.imgWrapper}>{ModuleAvatar}</div>
                    <Text weight={'600'} className={cls.Name}>
                        {name}
                    </Text>
                    <div className={cls.Info}>
                        <Tooltip content={<TruckModuleTooltip name={name} />}>
                            <Icon
                                Svg={InfoIcon}
                                fill={'var(--color-accent)'}
                                width={16}
                                height={16}
                            />
                        </Tooltip>
                    </div>
                </Card>

                {buttonInteraction}
            </div>
        </div>
    );
};
