import { FC } from 'react';
import { TTruckState } from '@/shared/types/TTruckState.ts';
import {
    Button,
    Tooltip,
    Text,
    HStack,
    Icon,
    ScoreIcon,
    CashIcon,
} from '@project-1114/ui-kit';

import { TruckModels } from '@/shared/const/TruckModels.ts';
import { Unlock } from './Unlock/Unlock.tsx';
import { Buy } from './Buy/Buy.tsx';
import { Sale } from './Sale/Sale.tsx';

type InteractionButtonProps = {
    name: string;
    model: TruckModels;
    state: TTruckState;
    img?: string;
};

export const UnlockedTruckButton: FC<InteractionButtonProps> = ({
    name,
    model,
    state,
    img,
}) => {
    const notExplored = !state.unlocked;

    const notBought = !state.bought;

    if (notExplored) {
        const cantExplore = Boolean(state.needScore);
        if (cantExplore)
            return (
                <Tooltip
                    content={
                        <Text color={'error'} whiteSpace={'nowrap'}>
                            Не хватает {state.needScore} опыта
                        </Text>
                    }
                >
                    <Button
                        disabled
                        fullWidth
                        variant={'outline'}
                        paddingV={'0'}
                    >
                        <HStack align={'center'} gap={'xs'}>
                            <Icon Svg={ScoreIcon} width={32} height={32} />
                            <Text>{state.priceScore}</Text>
                        </HStack>
                    </Button>
                </Tooltip>
            );
        return (
            <Unlock
                model={model}
                priceScore={state.priceScore || 0}
                name={name}
                img={img}
            />
        );
    }
    if (notBought) {
        const cantBuy = Boolean(state.needCash);
        if (cantBuy)
            return (
                <Tooltip
                    content={
                        <Text color={'error'} whiteSpace={'nowrap'}>
                            Не хватает {state.needCash} денег
                        </Text>
                    }
                >
                    <Button
                        disabled
                        fullWidth
                        variant={'outline'}
                        paddingV={'0'}
                    >
                        <HStack align={'center'} gap={'xs'}>
                            <Icon Svg={CashIcon} width={32} height={32} />
                            <Text>{state.priceCash}</Text>
                        </HStack>
                    </Button>
                </Tooltip>
            );
        return (
            <Buy
                model={model}
                priceCash={state.priceCash || 0}
                name={name}
                img={img}
            />
        );
    }

    const cantSale = !state.canSale;
    if (cantSale)
        return (
            <Tooltip
                content={<Text color={'error'}>Ты не можешь его продать</Text>}
            >
                <Button disabled fullWidth variant={'outline'} paddingV={'0'}>
                    <HStack align={'center'} gap={'xs'}>
                        <Icon Svg={CashIcon} width={32} height={32} />
                        <Text>{state.priceCashForSale}</Text>
                    </HStack>
                </Button>
            </Tooltip>
        );
    return (
        <Sale
            model={model}
            priceCashForSale={state.priceCashForSale || 0}
            name={name}
            img={img}
        />
    );
};
