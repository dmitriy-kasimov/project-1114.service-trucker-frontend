import { Text, VStack } from '@project-1114/ui-kit';
import { FC } from 'react';

type TooltipProps = {
    name: string;
};

export const TruckModuleTooltip: FC<TooltipProps> = ({ name }) => {
    return (
        <VStack gap={'s'}>
            <Text whiteSpace={'nowrap'} color={'secondary'}>
                Название: {name}
            </Text>
            <Text whiteSpace={'nowrap'} color={'secondary'}>
                Описание модуля
            </Text>
        </VStack>
    );
};
