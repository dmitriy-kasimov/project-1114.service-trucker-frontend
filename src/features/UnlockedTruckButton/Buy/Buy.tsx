import { FC, useState } from 'react';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { Button, HStack, ModalConfirm, Text } from '@project-1114/ui-kit';
import { TruckCard } from '@/entities/TruckCard';

type TruckBuyProps = {
    name: string;
    model: TruckModels;
    img?: string;
    priceCash: number;
};

export const Buy: FC<TruckBuyProps> = ({ name, model, priceCash, img }) => {
    const [modal, setModal] = useState(false);

    const handleBuyTruck = () => {
        setModal(true);
    };
    return (
        <>
            <Button fullWidth onClick={handleBuyTruck}>
                <Text>Купить за {priceCash}</Text>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You bought')}
            >
                <HStack gap={'l'} align={'center'}>
                    <Text>Приобрести</Text>
                    <TruckCard id={model} name={name} model={model} img={img} />
                    <Text>за {priceCash} денег?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
