import { FC, useState } from 'react';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { Button, HStack, ModalConfirm, Text } from '@project-1114/ui-kit';
import { TruckCard } from '@/entities/TruckCard';

type TruckSaleProps = {
    name: string;
    model: TruckModels;
    img?: string;
    priceCashForSale: number;
};

export const Sale: FC<TruckSaleProps> = ({
    name,
    model,
    priceCashForSale,
    img,
}) => {
    const [modal, setModal] = useState(false);

    const handleBuyTruck = () => {
        setModal(true);
    };
    return (
        <>
            <Button fullWidth onClick={handleBuyTruck}>
                <Text>Продать за {priceCashForSale}</Text>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You bought')}
            >
                <HStack gap={'l'} align={'center'}>
                    <Text>Продать</Text>
                    <TruckCard id={model} name={name} model={model} img={img} />
                    <Text>за {priceCashForSale} денег?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
