import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TTruck } from '@/shared/types/TTruck.ts';

import Freightliner from '@/shared/assets/Freightliner.png';
import Phantom from '@/shared/assets/Phantom.png';
import Phantom2 from '@/shared/assets/Phantom2.png';
import Hauler from '@/shared/assets/Hauler.png';
import Hauler2 from '@/shared/assets/Hauler2.png';

export const TruckInfo: Record<TruckModels, TTruck> = {
    [TruckModels.Freightliner]: {
        name: 'Freightliner',
        img: Freightliner,
    },
    [TruckModels.Hauler]: {
        name: 'Hauler',
        img: Hauler,
    },
    [TruckModels.Hauler2]: {
        name: 'Hauler 2',
        img: Hauler2,
    },
    [TruckModels.Phantom]: {
        name: 'Phantom',
        img: Phantom,
    },
    [TruckModels.Phantom2]: {
        name: 'Phantom 2',
        img: Phantom2,
    },
};
