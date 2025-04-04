import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TTruck } from '@/shared/types/TTruck.ts';

import Frightliner from '@/shared/assets/Frightliner.png';
import Phantom from '@/shared/assets/Phantom.png';
import Phantom2 from '@/shared/assets/Phantom2.png';
import Hauler from '@/shared/assets/Hauler.png';
import Hauler2 from '@/shared/assets/Hauler2.png';

export const TruckInfo: Record<TruckModels, TTruck> = {
    [TruckModels.Frightliner]: {
        img: Frightliner,
    },
    [TruckModels.Hauler]: {
        img: Hauler,
    },
    [TruckModels.Hauler2]: {
        img: Hauler2,
    },
    [TruckModels.Phantom]: {
        img: Phantom,
    },
    [TruckModels.Phantom2]: {
        img: Phantom2,
    },
};
