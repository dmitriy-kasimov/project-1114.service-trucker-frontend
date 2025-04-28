import { FC, useState } from 'react';
import {
    Button,
    CashIcon,
    HStack,
    Icon,
    ModalConfirm,
    Text,
} from '@project-1114/ui-kit';
import { TruckModuleCard } from '@/entities/TruckModuleCard';

type BuyProps = {
    name: string;
    img: string;
    priceCash: number;
};

export const Buy: FC<BuyProps> = ({ name, img, priceCash }) => {
    const [modal, setModal] = useState(false);

    const handleBuyModule = () => {
        setModal(true);
    };
    return (
        <>
            <Button fullWidth onClick={handleBuyModule} paddingV={'0'}>
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
                    <TruckModuleCard id={''} img={img} name={name} />
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
