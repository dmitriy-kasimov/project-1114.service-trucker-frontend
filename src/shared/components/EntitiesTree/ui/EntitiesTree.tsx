import cls from './EntitiesTree.module.scss';
import { getEntitiesTree } from '../helpers/getEntitiesTree.tsx';
import { TEntitiesTree } from '@/shared/components/EntitiesTree/model/types/TEntitiesTree.ts';
import { JSX } from 'react';

type EntitiesTreeProps<T, K> = {
    tries: TEntitiesTree<T, K>[];
    leaf: JSX.Element;
};
export function EntitiesTree<T, K>(props: EntitiesTreeProps<T, K>) {
    const { tries, leaf } = props;
    return <div className={cls.Layout}>{getEntitiesTree(tries, leaf)}</div>;
}
