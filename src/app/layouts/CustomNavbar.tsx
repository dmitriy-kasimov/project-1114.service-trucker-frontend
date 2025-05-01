import {
    CashIcon,
    ScoreIcon,
    FreeScoreIcon,
    DonatScoreIcon,
    HStack,
    Icon,
    Navbar,
    Text,
} from '@project-1114/ui-kit';

export const CustomNavbar = () => {
    return (
        <Navbar>
            <HStack
                max
                align="center"
                justify={'between'}
                style={{ padding: '0.5rem 0' }}
            >
                <Text color={'main'}>Go back</Text>
                <HStack
                    align={'center'}
                    gap={'l'}
                    style={{ marginRight: '1rem' }}
                >
                    <HStack align={'center'} gap={'s'}>
                        <Icon Svg={CashIcon} width={32} height={32} />
                        <Text color={'main'} weight={'500'}>
                            14000
                        </Text>
                    </HStack>
                    <HStack align={'center'} gap={'s'}>
                        <Icon Svg={ScoreIcon} width={32} height={32} />
                        <Text color={'main'} weight={'500'}>
                            7
                        </Text>
                    </HStack>{' '}
                    <HStack align={'center'} gap={'s'}>
                        <Icon Svg={FreeScoreIcon} width={32} height={32} />
                        <Text color={'main'} weight={'500'}>
                            3
                        </Text>
                    </HStack>{' '}
                    <HStack align={'center'} gap={'s'}>
                        <Icon Svg={DonatScoreIcon} width={32} height={32} />
                        <Text color={'main'} weight={'500'}>
                            228
                        </Text>
                    </HStack>
                </HStack>
            </HStack>
        </Navbar>
    );
};
