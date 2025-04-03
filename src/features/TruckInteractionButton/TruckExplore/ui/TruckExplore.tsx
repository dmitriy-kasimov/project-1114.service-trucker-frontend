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

type TruckExploreProps = {
    model: TruckModels;
    priceScore: number;
};

export const TruckExplore: FC<TruckExploreProps> = ({ model, priceScore }) => {
    const [modal, setModal] = useState(false);

    const handleExploreTruck = () => {
        setModal(true);
    };
    return (
        <>
            <Button
                fullWidth
                onClick={handleExploreTruck}
                style={{ background: 'DarkGreen' }}
            >
                Открыть за {priceScore}
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You explored')}
            >
                <HStack gap={'l'} align={'end'}>
                    <Text>Открыть</Text>
                    <VStack>
                        <Text size={'l'}>{TruckInfo[model].name}</Text>
                        <img
                            src={TruckInfo[model].img}
                            alt={TruckInfo[model].name}
                            decoding={'async'}
                            style={{ width: 120, height: 60 }}
                        />
                    </VStack>
                    <Text>за {priceScore} опыта?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
