import { FC, ReactElement } from 'react';
import { VStack } from '@project-1114/ui-kit';
import cls from './EntityCard.module.scss';

type EntityCardProps = {
    label: ReactElement;
    img: ReactElement;
    buttonInteraction: ReactElement;
};

export const EntityCard: FC<EntityCardProps> = ({
    label,
    img,
    buttonInteraction,
}) => {
    return (
        <VStack gap={'xs'}>
            {label}
            <div className={cls.imgWrapper}>{img}</div>
            {buttonInteraction}
        </VStack>
    );
};
