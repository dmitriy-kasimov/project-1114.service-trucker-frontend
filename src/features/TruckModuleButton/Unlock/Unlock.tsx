import { FC, useState } from 'react';
import {
    Button,
    HStack,
    Icon,
    ModalConfirm,
    ScoreIcon,
    Text,
} from '@project-1114/ui-kit';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TruckModuleCard } from '@/entities/TruckModuleCard';

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
            <Button fullWidth onClick={handleUnlock} paddingV={'0'}>
                <HStack align={'center'} gap={'xs'}>
                    <Icon Svg={ScoreIcon} width={32} height={32} />
                    <Text>{priceScore}</Text>
                </HStack>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You unlocked the module')}
            >
                <HStack gap={'m'} align={'center'}>
                    <Text weight={'600'} size={'l'}>
                        Открыть
                    </Text>
                    <TruckModuleCard id={''} model={model} name={name} />
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
