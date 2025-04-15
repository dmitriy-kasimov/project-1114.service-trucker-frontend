import { HStack, Navbar, Text } from '@project-1114/ui-kit';

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
                    <Text color={'main'}>Валюта 1</Text>
                    <Text color={'main'}>Валюта 2</Text>
                    <Text color={'main'}>Валюта 3</Text>
                    <Text color={'main'}>Валюта 4</Text>
                </HStack>
            </HStack>
        </Navbar>
    );
};
