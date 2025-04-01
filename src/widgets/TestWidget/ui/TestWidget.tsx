import { FC } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { TruckCard } from '@/entities/TruckCard';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { HStack, VStack } from '@project-1114/ui-kit';

export const TestWidget: FC = () => {
    return (
        <Xwrapper>
            <HStack gap={'xl'}>
                <TruckCard
                    id={'elem1'}
                    model={TruckModels.Frightliner}
                    state={{
                        explored: true,
                        bought: true,
                        canSale: false,
                        priceCashForSale: 100500,
                    }}
                />
                <VStack gap={'xl'}>
                    <TruckCard
                        id={'elem2'}
                        model={TruckModels.Hauler}
                        state={{
                            explored: true,
                            bought: false,
                            priceCash: 1000,
                            needCash: 0,
                        }}
                    />
                    <TruckCard
                        id={'elem3'}
                        model={TruckModels.Phantom}
                        state={{
                            explored: true,
                            bought: false,
                            priceCash: 1010,
                            needCash: 10,
                        }}
                    />
                </VStack>

                <Xarrow
                    start={'elem1'} //can be react ref
                    end="elem2" //or an id
                    color={'red'}
                    strokeWidth={1}
                />
                <Xarrow
                    start={'elem1'} //can be react ref
                    end="elem3" //or an id
                    color={'red'}
                    strokeWidth={1}
                />
            </HStack>
        </Xwrapper>
    );
};
