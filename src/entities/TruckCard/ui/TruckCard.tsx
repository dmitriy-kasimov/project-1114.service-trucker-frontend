import { FC, HTMLAttributes, Ref } from 'react';
import { VStack } from '@project-1114/ui-kit';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { TruckInfo } from '@/shared/const/TruckInfo.ts';

import cls from './TruckCard.module.scss';
import { TTruckState } from '@/entities/TruckCard/model/types/TTruckState.ts';
import { InteractionButton } from '@/entities/TruckCard/ui/InteractionButton.tsx';

interface ITruckCard extends HTMLAttributes<HTMLDivElement> {
    model: TruckModels;
    state: TTruckState;
    ref?: Ref<HTMLImageElement> | undefined;
}
export const TruckCard: FC<ITruckCard> = ({ model, state, ref, ...props }) => {
    console.log(ref);
    return (
        <VStack gap={'xs'}>
            <div className={cls.imgWrapper}>
                <img
                    ref={ref}
                    src={TruckInfo[model].img}
                    alt={TruckInfo[model].name}
                    decoding={'async'}
                    className={cls.img}
                    {...props}
                />
            </div>

            <InteractionButton state={state} />
        </VStack>
    );
};
