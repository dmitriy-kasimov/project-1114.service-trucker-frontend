import { Suspense, memo, useCallback } from 'react';
import { Route, RouteProps, Routes } from 'react-router-dom';
import { routeConfig } from '../config/routeConfig';
export { Text } from '@project-1114/ui-kit';

const AppRouter = () => {
    // для того чтобы ссылка сохранялась и не приходилось делать одни и те же вычисления
    const renderWithWrapper = useCallback((route: RouteProps) => {
        const element = (
            <Suspense fallback={<Text>Loading...</Text>}>
                {route.element}
            </Suspense>
        );

        return <Route key={route.path} path={route.path} element={element} />;
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
