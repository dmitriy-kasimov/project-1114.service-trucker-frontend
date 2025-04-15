import { FC, ReactElement } from 'react';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { Card, Icon, Text, Tooltip } from '@project-1114/ui-kit';
import { TruckModulesInfo } from '@/shared/const/TruckModulesInfo.tsx';
import cls from './TruckModuleCard.module.scss';
import InfoIcon from '@/shared/assets/icons/InfoIcon.svg?react';
import { TruckModuleTooltip } from '@/entities/TruckModuleCard/ui/TruckModuleTooltip.tsx';
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
        <div id={id} className={cls.EntityCardWrapper}>
            <div className={cls.EntityCard}>
                {<Text size={'l'}>{name}</Text>}

                <Card padding={'0'} className={cls.Card}>
                    <div className={cls.imgWrapper}>
                        {TruckModulesInfo[model].icon}
                    </div>
                    <div className={cls.Info}>
                        <Tooltip
                            content={<TruckModuleTooltip name={name} />}
                            direction={'bottom'}
                        >
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
