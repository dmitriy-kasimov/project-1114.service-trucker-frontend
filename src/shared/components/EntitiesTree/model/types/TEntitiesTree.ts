export type TEntitiesTree<T, K> = {
    model: T;
    state: K;
    children?: TEntitiesTree<T, K>[];
};
