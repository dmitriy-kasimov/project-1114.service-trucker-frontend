import { FC, ReactElement, ReactNode } from 'react';
import { Card, Tooltip } from '@project-1114/ui-kit';
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
                {tooltip ? (
                    <Tooltip content={tooltip}>
                        <Card contentMargin={'s'} className={cls.Card}>
                            <div className={cls.imgWrapper}>{img}</div>
                        </Card>
                    </Tooltip>
                ) : (
                    <Card contentMargin={'s'} className={cls.Card}>
                        <div className={cls.imgWrapper}>{img}</div>
                    </Card>
                )}
                {buttonInteraction}
            </div>
        </div>
    );
};
