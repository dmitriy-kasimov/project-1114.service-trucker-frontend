import { FC } from 'react';
import Xarrow, { Xwrapper } from 'react-xarrows';
import { TruckCard } from '@/entities/TruckCard';
import { TruckModels } from '@/shared/const/TruckModels.ts';
import { Card, HStack, VStack } from '@project-1114/ui-kit';

import cls from './TestWidget.module.scss';

export const TestWidget: FC = () => {
    return (
        <Card className={cls.Card}>
            <Xwrapper>
                <HStack gap={'xl'}>
                    <TruckCard
                        id={'elem1'}
                        model={TruckModels.Frightliner}
                        state={{
                            explored: true,
                            bought: true,
                            canSale: true,
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
                        <HStack gap={'xl'}>
                            <TruckCard
                                id={'elem3'}
                                model={TruckModels.Phantom}
                                state={{
                                    explored: true,
                                    bought: false,
                                    priceCash: 1010,
                                    needCash: 0,
                                }}
                            />
                            <TruckCard
                                id={'elem4'}
                                model={TruckModels.Phantom2}
                                state={{
                                    explored: false,
                                    bought: false,
                                    priceScore: 100,
                                    needScore: 0,
                                }}
                            />
                        </HStack>
                    </VStack>

                    <Xarrow
                        start={'elem1'} //can be react ref
                        end="elem2" //or an id
                        color={'white'}
                        strokeWidth={2}
                    />
                    <Xarrow
                        start={'elem1'} //can be react ref
                        end="elem3" //or an id
                        color={'white'}
                        strokeWidth={2}
                    />
                    <Xarrow
                        start={'elem3'} //can be react ref
                        end="elem4" //or an id
                        color={'white'}
                        strokeWidth={2}
                    />
                </HStack>
            </Xwrapper>
        </Card>
    );
};
