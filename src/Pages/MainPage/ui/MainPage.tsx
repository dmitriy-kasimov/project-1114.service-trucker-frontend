import { FC } from 'react';
import { HeavyTrucksTree } from '@/widgets/HeavyTrucksTree';
import { VansTree } from '@/widgets/VansTree';

export const MainPage: FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <HeavyTrucksTree />
            <VansTree />
        </div>
    );
};
