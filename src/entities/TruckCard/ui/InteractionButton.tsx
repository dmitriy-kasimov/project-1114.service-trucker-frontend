import { FC } from 'react';
import { TTruckState } from '../model/types/TTruckState.ts';
import { Button, Tooltip, Text } from '@project-1114/ui-kit';
import { TruckExplore } from '@/features/TruckExplore';
import { TruckModels } from '@/shared/const/TruckModels.ts';

type InteractionButtonProps = {
    model: TruckModels;
    state: TTruckState;
};

export const InteractionButton: FC<InteractionButtonProps> = ({
    model,
    state,
}) => {
    const notExplored = !state.explored;

    const notBought = !state.bought;

    if (notExplored) {
        const cantExplore = Boolean(state.needScore);
        if (cantExplore)
            return (
                <Tooltip
                    content={
                        <Text color={'error'}>
                            Не хватает {state.needScore} опыта
                        </Text>
                    }
                >
                    <Button fullWidth>Открыть за {state.priceScore}</Button>
                </Tooltip>
            );
        return (
            <TruckExplore model={model} priceScore={state.priceScore || 0} />
        );
    }
    if (notBought) {
        const cantBuy = Boolean(state.needCash);
        if (cantBuy)
            return (
                <Tooltip
                    content={
                        <Text color={'error'}>
                            Не хватает {state.needCash} денег
                        </Text>
                    }
                >
                    <Button fullWidth>Приобрести за {state.priceCash}</Button>
                </Tooltip>
            );
        return <Button fullWidth>Приобрести за {state.priceCash}</Button>;
    }

    const cantSale = !state.canSale;
    if (cantSale)
        return (
            <Tooltip
                content={<Text color={'error'}>Ты не можешь его продать</Text>}
            >
                <Button fullWidth>Продать за {state.priceCashForSale}</Button>
            </Tooltip>
        );
    return <Button fullWidth>Продать за {state.priceCashForSale}</Button>;
};
