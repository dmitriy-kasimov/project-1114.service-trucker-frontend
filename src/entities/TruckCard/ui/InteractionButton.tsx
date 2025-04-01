import { FC } from 'react';
import { TTruckState } from '../model/types/TTruckState.ts';
import { Button, Tooltip, Text } from '@project-1114/ui-kit';

type InteractionButtonProps = {
    state: TTruckState;
};

export const InteractionButton: FC<InteractionButtonProps> = ({ state }) => {
    const notExplored = !state.explored;

    const notBought = !state.bought;

    if (notExplored) {
        const cantExplore = !state.canExplore;
        if (cantExplore)
            return (
                <Tooltip
                    content={<Text color={'error'}>Не хватает опыта</Text>}
                >
                    <Button>Can't explore</Button>
                </Tooltip>
            );
        return <Button>Explore</Button>;
    }
    if (notBought) {
        const cantBuy = !state.canBuy;
        if (cantBuy)
            return (
                <Tooltip
                    content={<Text color={'error'}>Не хватает денег</Text>}
                >
                    <Button>Can't buy</Button>
                </Tooltip>
            );
        return <Button>Buy</Button>;
    }
    return <Button>Sale</Button>;
};
