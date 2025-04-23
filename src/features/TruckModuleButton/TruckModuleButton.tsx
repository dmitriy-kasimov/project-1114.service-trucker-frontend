import { FC } from 'react';
import { Button, Tooltip, Text } from '@project-1114/ui-kit';

import { Unlock } from './Unlock/Unlock.tsx';
import { Buy } from './Buy/Buy.tsx';
import { Set } from './Set/Set.tsx';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TTruckModuleState } from '@/entities/TruckModuleCard';

type TruckModuleButtonProps = {
    name: string;
    model: TruckModuleModels;
    state: TTruckModuleState;
};

export const TruckModuleButton: FC<TruckModuleButtonProps> = ({
    name,
    model,
    state,
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
                    <Button disabled fullWidth>
                        Открыть за {state.priceScore}
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
                        <Text color={'error'} whiteSpace={'nowrap'}>
                            Не хватает {state.needCash} денег
                        </Text>
                    }
                >
                    <Button disabled fullWidth>
                        Приобрести за {state.priceCash}
                    </Button>
                </Tooltip>
            );
        return (
            <Buy model={model} priceCash={state.priceCash || 0} name={name} />
        );
    }

    const set = state.set;
    if (set) return <Text>Установлен</Text>;

    return <Set model={model} name={name} />;
};
