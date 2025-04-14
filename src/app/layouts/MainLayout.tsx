import { Window } from '@project-1114/ui-kit';
import AppRouter from '@/app/providers/router/ui/AppRouter.tsx';
import { CustomSidebar } from './CustomSidebar.tsx';

export const MainLayout = () => {
    return (
        <Window isOpen={true} fullscreen sidebar={<CustomSidebar />}>
            <AppRouter />
        </Window>
    );
};
