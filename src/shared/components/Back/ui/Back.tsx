import { FC } from 'react';
import { Icon, Text, ArrowBackIcon, Button } from '@project-1114/ui-kit';
import { useNavigate } from 'react-router-dom';

export const Back: FC = () => {
    const navigate = useNavigate();
    return (
        <Button
            onClick={() => navigate(-1)}
            paddingV={'0'}
            paddingH={'0'}
            variant={'clear'}
            addonLeft={
                <Icon
                    Svg={ArrowBackIcon}
                    width={18}
                    height={18}
                    fill={'var(--color-accent)'}
                />
            }
        >
            <Text size={'m'} color={'main'}>
                Назад
            </Text>
        </Button>
    );
};
