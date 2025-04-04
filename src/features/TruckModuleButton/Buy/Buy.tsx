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
            <Button
                fullWidth
                onClick={handleBuyModule}
                style={{ background: 'DarkOrange' }}
            >
                Купить за {priceCash}
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You bought')}
            >
                <HStack gap={'l'} align={'end'}>
                    <Text>Приобрести</Text>
                    <VStack>
                        <Text size={'l'}>{name}</Text>
                        {TruckModulesInfo[model].icon}
                    </VStack>
                    <Text>за {priceCash} денег?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
