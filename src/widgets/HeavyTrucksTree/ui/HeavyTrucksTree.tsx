import { FC } from 'react';
import { ReactDiagram } from 'gojs-react';
import { tree } from '../const/tree.tsx';
import { links } from '../const/links.ts';

import cls from './HeavyTrucksTree.module.scss';

export const HeavyTrucksTree: FC = () => {
    return (
        <ReactDiagram
            initDiagram={tree}
            divClassName={cls.block}
            nodeDataArray={links}
        />
    );
};
