import { FC, ReactElement, ReactNode } from 'react';
import { Card, Tooltip, Text } from '@project-1114/ui-kit';
import cls from './EntityCard.module.scss';

type EntityCardProps = {
    id: string;
    label: ReactElement;
    img: ReactElement;
    buttonInteraction?: ReactElement;
    tooltip?: ReactNode;
};

export const EntityCard: FC<EntityCardProps> = ({
    id,
    label,
    img,
    buttonInteraction,
    tooltip,
}) => {
    return (
        <div id={id} className={cls.EntityCardWrapper}>
            <div className={cls.EntityCard}>
                {label}

                <Card padding={0} className={cls.Card} variant={'outlined'}>
                    <div className={cls.imgWrapper}>{img}</div>
                    <div className={cls.Info}>
                        <Tooltip content={tooltip} direction={'bottom'}>
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
