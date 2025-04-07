import { FC, ReactElement } from 'react';
import { Card } from '@project-1114/ui-kit';
import cls from './EntityCard.module.scss';

type EntityCardProps = {
    id: string;
    label: ReactElement;
    img: ReactElement;
    buttonInteraction?: ReactElement;
};

export const EntityCard: FC<EntityCardProps> = ({
    id,
    label,
    img,
    buttonInteraction,
}) => {
    return (
        <div id={id} className={cls.EntityCardWrapper}>
            <div className={cls.EntityCard}>
                {label}
                <Card contentMargin={'s'} className={cls.Card}>
                    <div className={cls.imgWrapper}>{img}</div>
                </Card>
                {buttonInteraction}
            </div>
        </div>
    );
};
