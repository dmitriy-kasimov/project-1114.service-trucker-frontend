import { FC } from 'react';
import {
    Button,
    Tooltip,
    Text,
    Icon,
    HStack,
    ScoreIcon,
    CashIcon,
} from '@project-1114/ui-kit';

import { Unlock } from './Unlock/Unlock.tsx';
import { Buy } from './Buy/Buy.tsx';
import { Set } from './Set/Set.tsx';
import { TTruckModuleState } from '@/entities/TruckModuleCard';
import SpannerIcon from '@/shared/assets/icons/spanner.svg?react';

type TruckModuleButtonProps = {
    name: string;
    img: string;
    state: TTruckModuleState;
};

export const TruckModuleButton: FC<TruckModuleButtonProps> = ({
    name,
    img,
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
                    fullWidth
                >
                    <Button
                        disabled
                        fullWidth
                        variant={'outline'}
                        paddingV={'0'}
                        paddingH={'0'}
                    >
                        <HStack align={'center'} gap={'xs'}>
                            <Icon Svg={ScoreIcon} width={32} height={32} />
                            <Text>{state.priceScore}</Text>
                        </HStack>
                    </Button>
                </Tooltip>
            );
        return (
            <Unlock img={img} priceScore={state.priceScore || 0} name={name} />
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
                    fullWidth
                >
                    <Button
                        disabled
                        fullWidth
                        variant={'outline'}
                        paddingV={'0'}
                        paddingH={'0'}
                    >
                        <HStack align={'center'} gap={'xs'}>
                            <Icon Svg={CashIcon} width={32} height={32} />
                            <Text>{state.priceCash}</Text>
                        </HStack>
                    </Button>
                </Tooltip>
            );
        return <Buy priceCash={state.priceCash || 0} name={name} img={img} />;
    }

    const set = state.set;
    if (set) return <Icon Svg={SpannerIcon} width={32} height={32} />;

    return <Set name={name} img={img} />;
};
