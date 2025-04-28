import { FC, useState } from 'react';
import { Button, HStack, Icon, ModalConfirm, Text } from '@project-1114/ui-kit';
import { TruckModuleCard } from '@/entities/TruckModuleCard';
import SpannerIcon from '@/shared/assets/icons/spanner.svg?react';

type SetProps = {
    name: string;
    img: string;
};

export const Set: FC<SetProps> = ({ name, img }) => {
    const [modal, setModal] = useState(false);

    const handleSetModule = () => {
        setModal(true);
    };
    return (
        <>
            <Button
                fullWidth
                onClick={handleSetModule}
                paddingV={'0'}
                paddingH={'0'}
            >
                <HStack align={'center'} gap={'xs'}>
                    <Icon Svg={SpannerIcon} width={32} height={32} />
                </HStack>
            </Button>
            <ModalConfirm
                isOpen={modal}
                onClose={() => setModal(false)}
                onConfirm={() => console.log('You bought')}
            >
                <HStack gap={'m'} align={'center'}>
                    <Text weight={'600'} size={'l'}>
                        Установить
                    </Text>
                    <TruckModuleCard id={''} img={img} name={name} />
                    <Text weight={'600'} size={'l'}>
                        в качестве основного модуля?
                    </Text>
                </HStack>
            </ModalConfirm>
        </>
    );
};
