import { VStack } from '@project-1114/ui-kit';
import { UnlockedVansPage } from '@/Pages/UnlockedVansPage';

export default function App() {
    return (
        <VStack gap={'xl'} max>
            <UnlockedVansPage />
            {/*<TruckModulesPage />*/}
        </VStack>
    );
}
