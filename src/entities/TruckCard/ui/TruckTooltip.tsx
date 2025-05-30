import { Text, VStack } from '@project-1114/ui-kit';
import { FC } from 'react';

type TooltipProps = {
    name: string;
};

export const TruckTooltip: FC<TooltipProps> = ({ name }) => {
    return (
        <VStack gap={'s'}>
            <Text whiteSpace={'nowrap'} color={'secondary'}>
                Название: {name}
            </Text>
            <Text whiteSpace={'nowrap'} color={'secondary'}>
                Описание: много текста и все такое
            </Text>
        </VStack>
    );
};
