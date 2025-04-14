import { FC, useState } from 'react';
import { Button, HStack, ModalConfirm, Text } from '@project-1114/ui-kit';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TruckModuleCard } from '@/entities/TruckModuleCard/ui/TruckModuleCard.tsx';

type UnlockProps = {
    name: string;
    model: TruckModuleModels;
    priceScore: number;
};

export const Unlock: FC<UnlockProps> = ({ name, model, priceScore }) => {
    const [modal, setModal] = useState(false);

    const handleUnlock = () => {
        setModal(true);
    };
    return (
        <>
            <Button
                fullWidth
                onClick={handleUnlock}
                style={{ background: 'DarkGreen' }}
            >
                <Text>Открыть за {priceScore}</Text>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You unlocked the module')}
            >
                <HStack gap={'l'} align={'center'}>
                    <Text>Открыть</Text>
                    <TruckModuleCard id={''} model={model} name={name} />
                    <Text>за {priceScore} опыта?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
