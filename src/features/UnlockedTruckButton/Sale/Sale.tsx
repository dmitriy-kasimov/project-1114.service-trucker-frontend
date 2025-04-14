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

type TruckSaleProps = {
    name: string;
    model: TruckModels;
    priceCashForSale: number;
};

export const Sale: FC<TruckSaleProps> = ({ name, model, priceCashForSale }) => {
    const [modal, setModal] = useState(false);

    const handleBuyTruck = () => {
        setModal(true);
    };
    return (
        <>
            <Button
                fullWidth
                onClick={handleBuyTruck}
                style={{ background: 'brown' }}
            >
                <Text>Продать за {priceCashForSale}</Text>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You bought')}
            >
                <HStack gap={'l'} align={'end'}>
                    <Text>Продать</Text>
                    <VStack>
                        <Text size={'l'}>{name}</Text>
                        <img
                            src={TruckInfo[model].img}
                            alt={name}
                            decoding={'async'}
                            style={{ width: 120, height: 60 }}
                        />
                    </VStack>
                    <Text>за {priceCashForSale} денег?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
