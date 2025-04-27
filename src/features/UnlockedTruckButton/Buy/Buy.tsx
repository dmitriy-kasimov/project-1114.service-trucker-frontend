import { FC, useState } from 'react';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import {
    Button,
    CashIcon,
    HStack,
    Icon,
    ModalConfirm,
    Text,
} from '@project-1114/ui-kit';
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
            <Button fullWidth onClick={handleBuyTruck} paddingV={'0'}>
                <HStack align={'center'} gap={'xs'}>
                    <Icon Svg={CashIcon} width={32} height={32} />
                    <Text>{priceCash}</Text>
                </HStack>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You bought')}
            >
                <HStack gap={'m'} align={'center'}>
                    <Text weight={'600'} size={'l'}>
                        Приобрести
                    </Text>
                    <TruckCard
                        id={model}
                        name={name}
                        model={model}
                        img={img}
                        size={'s'}
                    />
                    <Text weight={'600'} size={'l'}>
                        за
                    </Text>
                    <HStack align={'center'} gap={'xs'}>
                        <Icon Svg={CashIcon} width={32} height={32} />
                        <Text>{priceCash}</Text>
                    </HStack>
                    <Text weight={'600'} size={'l'}>
                        ?
                    </Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
