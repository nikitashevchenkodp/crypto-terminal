import { MyPositions, PairTransactions, TradeChart, TradePanel } from '@/modules';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

export const MobileLayout = () => {
  return (
    <div className="md:hidden w-full flex flex-col">
      <Tabs defaultValue="trade" className="w-full flex-1 flex flex-col">
        <TabsContent value="trade" className="flex-1 ">
          <div className="h-full">
            <div className="border-b h-1/2">
              <TradePanel />
            </div>
            <div className="h-1/2">
              <PairTransactions />
            </div>
          </div>
        </TabsContent>
        <TabsContent value="chart" className="flex-1">
          <div className="h-full">
            <TradeChart />
          </div>
        </TabsContent>
        <TabsContent value="info" className="flex-1">
          <div className="h-full">
            <MyPositions />
          </div>
        </TabsContent>
        <TabsList className="w-full">
          <TabsTrigger className="flex-1" value="trade">
            Trade
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="chart">
            Chart
          </TabsTrigger>
          <TabsTrigger className="flex-1" value="info">
            Info
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* 
      <div className="flex items-center w-full border-t">
        <button className="flex-1 p-2 border-r">trade</button>
        <button className="flex-1 p-2 border-r">chart</button>
        <button className="flex-1 p-2">info</button>
      </div> */}
    </div>
  );
};
