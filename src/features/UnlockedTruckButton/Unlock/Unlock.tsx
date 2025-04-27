import { FC, useState } from 'react';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import {
    Button,
    HStack,
    Icon,
    ModalConfirm,
    ScoreIcon,
    Text,
} from '@project-1114/ui-kit';
import { TruckCard } from '@/entities/TruckCard';

type TruckExploreProps = {
    name: string;
    model: TruckModels;
    img?: string;
    priceScore: number;
};

export const Unlock: FC<TruckExploreProps> = ({
    name,
    model,
    priceScore,
    img,
}) => {
    const [modal, setModal] = useState(false);

    const handleExploreTruck = () => {
        setModal(true);
    };
    return (
        <>
            <Button fullWidth onClick={handleExploreTruck} paddingV={'0'}>
                <HStack align={'center'} gap={'xs'}>
                    <Icon Svg={ScoreIcon} width={32} height={32} />
                    <Text>{priceScore}</Text>
                </HStack>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You unlocked')}
            >
                <HStack gap={'m'} align={'center'}>
                    <Text weight={'600'} size={'l'}>
                        Открыть
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
                        <Icon Svg={ScoreIcon} width={32} height={32} />
                        <Text>{priceScore}</Text>
                    </HStack>
                    <Text weight={'600'} size={'l'}>
                        ?
                    </Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
