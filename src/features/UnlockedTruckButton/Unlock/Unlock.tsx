import { FC, useState } from 'react';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { Button, HStack, ModalConfirm, Text } from '@project-1114/ui-kit';
import { TruckCard } from '@/entities/TruckCard';

type TruckExploreProps = {
    name: string;
    model: TruckModels;
    priceScore: number;
};

export const Unlock: FC<TruckExploreProps> = ({ name, model, priceScore }) => {
    const [modal, setModal] = useState(false);

    const handleExploreTruck = () => {
        setModal(true);
    };
    return (
        <>
            <Button fullWidth onClick={handleExploreTruck}>
                <Text>Открыть за {priceScore}</Text>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You unlocked')}
            >
                <HStack gap={'l'} align={'center'}>
                    <Text>Открыть</Text>
                    <TruckCard id={model} name={name} model={model} />
                    <Text>за {priceScore} опыта?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
