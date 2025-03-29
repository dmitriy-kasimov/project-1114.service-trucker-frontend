import Surfer from '../assets/Surfer.png';
import Surfer2 from '../assets/Surfer2.webp';
import Benson from '../assets/Benson.webp';
import Pounder from '../assets/Pounder.png';
import Pounder2 from '../assets/Pounder2.png';
import Mule from '../assets/Mule.png';
import Mule2 from '../assets/Mule2.png';
import Mule3 from '../assets/Mule3.webp';
import Mule4 from '../assets/Mule4.png';

import Boxville from '../assets/Boxville.webp';
import Boxville2 from '../assets/Boxville2.png';
import Boxville3 from '../assets/Boxville3.png';
import Boxville4 from '../assets/Boxville4.png';
import Stockade from '../assets/Stockade.png';

import SlamVan2 from '../assets/SlamVan2.webp';
import Speedo from '../assets/Speedo.png';
import Speedo4 from '../assets/Speedo4.png';

import Burrito from '../assets/Burrito.png';
import Burrito2 from '../assets/Burrito2.png';
import Burrito3 from '../assets/Burrito3.png';
import Burrito4 from '../assets/Burrito4.png';
import GBurrito from '../assets/GBurrito.webp';
import GBurrito2 from '../assets/GBurrito2.png';

import Youga from '../assets/Youga.png';
import Youga2 from '../assets/Youga2.webp';
import Youga3 from '../assets/Youga3.png';

import Rumpo from '../assets/Rumpo.png';
import Rumpo2 from '../assets/Rumpo2.webp';
import Rumpo3 from '../assets/Rumpo3.png';

export const links = [
    {
        key: 'Surfer2',
        name: 'Surfer 2',
        source: Surfer2,
    },
    {
        key: 'Surfer',
        name: 'Surfer',
        source: Surfer,
        parent: 'Surfer2',
    },

    {
        key: 'SlamVan2',
        name: 'SlamVan 2',
        source: SlamVan2,
        parent: 'Surfer',
    },

    {
        key: 'Rumpo',
        name: 'Rumpo',
        source: Rumpo,
        parent: 'SlamVan2',
    },
    {
        key: 'Rumpo2',
        name: 'Rumpo 2',
        source: Rumpo2,
        parent: 'Rumpo',
    },
    {
        key: 'Rumpo3',
        name: 'Rumpo 3',
        source: Rumpo3,
        parent: 'Rumpo2',
    },

    {
        key: 'Youga',
        name: 'Youga',
        source: Youga,
        parent: 'SlamVan2',
    },
    {
        key: 'Youga2',
        name: 'Youga 2',
        source: Youga2,
        parent: 'Youga',
    },
    {
        key: 'Youga3',
        name: 'Youga 3',
        source: Youga3,
        parent: 'Youga2',
    },

    {
        key: 'Burrito',
        name: 'Burrito',
        source: Burrito,
        parent: 'SlamVan2',
    },
    {
        key: 'Burrito2',
        name: 'Burrito2',
        source: Burrito2,
        parent: 'Burrito',
    },
    {
        key: 'Burrito3',
        name: 'Burrito 3',
        source: Burrito3,
        parent: 'Burrito2',
    },
    {
        key: 'Burrito4',
        name: 'Burrito 4',
        source: Burrito4,
        parent: 'Burrito3',
    },
    {
        key: 'GBurrito',
        name: 'GBurrito',
        source: GBurrito,
        parent: 'Burrito4',
    },
    {
        key: 'GBurrito2',
        name: 'GBurrito 2',
        source: GBurrito2,
        parent: 'GBurrito',
    },

    {
        key: 'Speedo',
        name: 'Speedo',
        source: Speedo,
        parent: 'SlamVan2',
    },
    {
        key: 'Speedo4',
        name: 'Speedo 4',
        source: Speedo4,
        parent: 'Speedo',
    },

    {
        key: 'Boxville',
        name: 'Boxville',
        source: Boxville,
        parent: 'Surfer',
    },
    {
        key: 'Boxville2',
        name: 'Boxville 2',
        source: Boxville2,
        parent: 'Boxville',
    },
    {
        key: 'Boxville3',
        name: 'Boxville 3',
        source: Boxville3,
        parent: 'Boxville2',
    },
    {
        key: 'Boxville4',
        name: 'Boxville 4',
        source: Boxville4,
        parent: 'Boxville3',
    },
    {
        key: 'Stockade',
        name: 'Stockade',
        source: Stockade,
        parent: 'Boxville4',
    },

    {
        key: 'Benson',
        name: 'Benson',
        source: Benson,
        parent: 'Surfer',
    },
    {
        key: 'Pounder',
        name: 'Pounder',
        source: Pounder,
        parent: 'Benson',
    },
    {
        key: 'Pounder2',
        name: 'Pounder 2',
        source: Pounder2,
        parent: 'Pounder',
    },

    {
        key: 'Mule',
        name: 'Mule',
        source: Mule,
        parent: 'Surfer',
    },
    {
        key: 'Mule2',
        name: 'Mule 2',
        source: Mule2,
        parent: 'Mule',
    },
    {
        key: 'Mule3',
        name: 'Mule 3',
        source: Mule3,
        parent: 'Mule2',
    },
    {
        key: 'Mule4',
        name: 'Mule 4',
        source: Mule4,
        parent: 'Mule3',
    },
];
