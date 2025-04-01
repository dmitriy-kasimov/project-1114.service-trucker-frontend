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
                        canBuy: false,
                        canExplore: false,
                        explored: true,
                        bought: false,
                    }}
                />
                <VStack gap={'xl'}>
                    <TruckCard
                        id={'elem2'}
                        model={TruckModels.Hauler}
                        state={{
                            canBuy: false,
                            canExplore: false,
                            explored: true,
                            bought: false,
                        }}
                    />
                    <TruckCard
                        id={'elem3'}
                        model={TruckModels.Phantom}
                        state={{
                            canBuy: false,
                            canExplore: false,
                            explored: true,
                            bought: false,
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
