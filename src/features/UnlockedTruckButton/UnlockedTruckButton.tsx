import { FC } from 'react';
import { TTruckState } from '@/shared/types/TTruckState.ts';
import { Button, Tooltip, Text } from '@project-1114/ui-kit';

import { TruckModels } from '@/shared/const/TruckModels.ts';
import { Unlock } from './Unlock/Unlock.tsx';
import { Buy } from './Buy/Buy.tsx';
import { Sale } from './Sale/Sale.tsx';

type InteractionButtonProps = {
    name: string;
    model: TruckModels;
    state: TTruckState;
};

export const UnlockedTruckButton: FC<InteractionButtonProps> = ({
    name,
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
                    <Button disabled fullWidth>
                        <Text>Открыть за {state.priceScore}</Text>
                    </Button>
                </Tooltip>
            );
        return (
            <Unlock
                model={model}
                priceScore={state.priceScore || 0}
                name={name}
            />
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
                    <Button disabled fullWidth>
                        <Text>Приобрести за {state.priceCash}</Text>
                    </Button>
                </Tooltip>
            );
        return (
            <Buy model={model} priceCash={state.priceCash || 0} name={name} />
        );
    }

    const cantSale = !state.canSale;
    if (cantSale)
        return (
            <Tooltip
                content={<Text color={'error'}>Ты не можешь его продать</Text>}
            >
                <Button disabled fullWidth>
                    <Text> Продать за {state.priceCashForSale}</Text>
                </Button>
            </Tooltip>
        );
    return (
        <Sale
            model={model}
            priceCashForSale={state.priceCashForSale || 0}
            name={name}
        />
    );
};
