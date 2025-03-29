import { FC } from 'react';
import { ReactDiagram } from 'gojs-react';
import { tree } from '../const/tree.ts';
import { links } from '../const/links.ts';

import cls from './VansTree.module.scss';

export const VansTree: FC = () => {
    return (
        <ReactDiagram
            initDiagram={tree}
            divClassName={cls.block}
            nodeDataArray={links}
        />
    );
};
