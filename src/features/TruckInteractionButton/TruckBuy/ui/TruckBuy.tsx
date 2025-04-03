import { FC, useState } from 'react';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import {
    Button,
    HStack,
    ModalConfirm,
    Text,
    VStack,
} from '@project-1114/ui-kit';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';

type TruckBuyProps = {
    model: TruckModels;
    priceCash: number;
};

export const TruckBuy: FC<TruckBuyProps> = ({ model, priceCash }) => {
    const [modal, setModal] = useState(false);

    const handleBuyTruck = () => {
        setModal(true);
    };
    return (
        <>
            <Button
                fullWidth
                onClick={handleBuyTruck}
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
                        <Text size={'l'}>{TruckInfo[model].name}</Text>
                        <img
                            src={TruckInfo[model].img}
                            alt={TruckInfo[model].name}
                            decoding={'async'}
                            style={{ width: 120, height: 60 }}
                        />
                    </VStack>
                    <Text>за {priceCash} денег?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
