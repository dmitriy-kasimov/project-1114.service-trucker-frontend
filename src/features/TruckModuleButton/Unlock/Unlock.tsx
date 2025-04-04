import { FC, useState } from 'react';
import {
    Button,
    HStack,
    ModalConfirm,
    Text,
    VStack,
} from '@project-1114/ui-kit';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TruckModulesInfo } from '@/shared/const/TruckModulesInfo.tsx';

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
                Открыть за {priceScore}
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You unlocked the module')}
            >
                <HStack gap={'l'} align={'end'}>
                    <Text>Открыть</Text>
                    <VStack>
                        <Text size={'l'}>{name}</Text>
                        {TruckModulesInfo[model].icon}
                    </VStack>
                    <Text>за {priceScore} опыта?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
