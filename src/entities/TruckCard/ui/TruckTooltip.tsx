import { Text, VStack } from '@project-1114/ui-kit';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { FC } from 'react';

type TooltipProps = {
    name: string;
    model: TruckModels;
};

export const TruckTooltip: FC<TooltipProps> = ({ name, model }) => {
    return (
        <VStack gap={'s'}>
            <Text color={'secondary'}>Название: {name}</Text>
            <Text color={'secondary'}>Описание: много текста и все такое</Text>
        </VStack>
    );
};
