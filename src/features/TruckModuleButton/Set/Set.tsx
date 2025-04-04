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

type SetProps = {
    name: string;
    model: TruckModuleModels;
};

export const Set: FC<SetProps> = ({ name, model }) => {
    const [modal, setModal] = useState(false);

    const handleSetModule = () => {
        setModal(true);
    };
    return (
        <>
            <Button
                fullWidth
                onClick={handleSetModule}
                style={{ background: 'MediumBlue' }}
            >
                Установить
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You bought')}
            >
                <HStack gap={'l'} align={'end'}>
                    <Text>Установить</Text>
                    <VStack>
                        <Text size={'l'}>{name}</Text>
                        {TruckModulesInfo[model].icon}
                    </VStack>
                    <Text>в качестве основного модуля?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
