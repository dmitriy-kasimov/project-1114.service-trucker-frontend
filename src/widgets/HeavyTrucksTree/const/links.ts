import Freightliner from '../../../assets/Freightliner.png';
import Phantom from '../../../assets/Phantom.png';
import Phantom2 from '../../../assets/Phantom2.png';
import Hauler from '../../../assets/Hauler.png';
import Hauler2 from '../../../assets/Hauler2.png';

export const links = [
    {
        key: 'Freightliner',
        name: 'Freightliner',
        source: Freightliner,
    },
    {
        key: 'Phantom',
        parent: 'Freightliner',
        name: 'Phantom',
        source: Phantom,
    },
    {
        key: 'Phantom2',
        parent: 'Phantom',
        name: 'Phantom 2',
        source: Phantom2,
    },
    {
        key: 'Hauler',
        parent: 'Freightliner',
        name: 'Hauler',
        source: Hauler,
    },
    {
        key: 'Hauler2',
        parent: 'Hauler',
        name: 'Hauler 2',
        source: Hauler2,
    },
];
