import { FC, useState } from 'react';
import { Button, HStack, ModalConfirm, Text } from '@project-1114/ui-kit';
import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TruckModuleCard } from '@/entities/TruckModuleCard/ui/TruckModuleCard.tsx';

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
                <Text align={'center'}>Установить</Text>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You bought')}
            >
                <HStack gap={'l'} align={'center'}>
                    <Text>Установить</Text>
                    <TruckModuleCard id={''} model={model} name={name} />
                    <Text>в качестве основного модуля?</Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
