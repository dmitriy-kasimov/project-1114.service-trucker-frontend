import { FC, ReactElement } from 'react';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { Card, Text, Tooltip } from '@project-1114/ui-kit';
import { TruckModulesInfo } from '@/shared/const/TruckModulesInfo.tsx';
import cls from './TruckModuleCard.module.scss';

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

                <Card padding={'0'} className={cls.Card} variant={'outlined'}>
                    <div className={cls.imgWrapper}>
                        {TruckModulesInfo[model].icon}
                    </div>
                    <div className={cls.Info}>
                        <Tooltip content={<></>} direction={'bottom'}>
                            <Text color={'main'} size={'l'} weight={'600'}>
                                ?
                            </Text>
                        </Tooltip>
                    </div>
                </Card>

                {buttonInteraction}
            </div>
        </div>
    );
};
