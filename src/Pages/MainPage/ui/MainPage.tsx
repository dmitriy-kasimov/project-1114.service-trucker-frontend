import { FC } from 'react';
import { TestWidget } from '@/widgets/TestWidget';

export const MainPage: FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <TestWidget />
        </div>
    );
};
