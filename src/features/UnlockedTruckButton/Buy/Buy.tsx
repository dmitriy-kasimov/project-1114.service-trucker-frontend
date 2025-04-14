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
    name: string;
    model: TruckModels;
    priceCash: number;
};

export const Buy: FC<TruckBuyProps> = ({ name, model, priceCash }) => {
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
                <HStack gap={'l'} align={'end'}>
                    <Text>Приобрести</Text>
                    <VStack>
                        <Text size={'l'}>{name}</Text>
                        <img
                            src={TruckInfo[model].img}
                            alt={name}
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
