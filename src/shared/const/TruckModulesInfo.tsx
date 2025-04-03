import { TruckModuleModels } from '@/shared/const/TruckModuleModels.ts';
import { TTruckModule } from '@/shared/types/TTruckModule.ts';

import AxisIcon from '@/shared/assets/icons/AxisIcon.svg?react';
import EngineIcon from '@/shared/assets/icons/AxisIcon.svg?react';
import FuelTankIcon from '@/shared/assets/icons/AxisIcon.svg?react';
import BatteryIcon from '@/shared/assets/icons/AxisIcon.svg?react';

import { Icon } from '@project-1114/ui-kit';

export const TruckModulesInfo: Record<TruckModuleModels, TTruckModule> = {
    [TruckModuleModels.Axis]: {
        icon: <Icon Svg={AxisIcon} />,
    },
    [TruckModuleModels.Engine]: {
        icon: <Icon Svg={EngineIcon} />,
    },
    [TruckModuleModels.FuelTank]: {
        icon: <Icon Svg={FuelTankIcon} />,
    },
    [TruckModuleModels.Battery]: {
        icon: <Icon Svg={BatteryIcon} />,
    },
};
