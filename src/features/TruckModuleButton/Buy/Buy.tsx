import { FC, useState } from 'react';
import { Button, HStack, ModalConfirm, Text } from '@project-1114/ui-kit';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TruckModuleCard } from '@/entities/TruckModuleCard';

type BuyProps = {
    name: string;
    model: TruckModuleModels;
    priceCash: number;
};

export const Buy: FC<BuyProps> = ({ name, model, priceCash }) => {
    const [modal, setModal] = useState(false);

    const handleBuyModule = () => {
        setModal(true);
    };
    return (
        <>
            <Button fullWidth onClick={handleBuyModule}>
                <Text>Купить за {priceCash}</Text>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You bought')}
            >
                <HStack gap={'l'} align={'center'}>
                    <Text>Приобрести</Text>
                    <TruckModuleCard id={''} model={model} name={name} />
                    <Text>за {priceCash} денег?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
