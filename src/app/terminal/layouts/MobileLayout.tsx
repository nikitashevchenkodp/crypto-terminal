import { MyPositions, PairTransactions, TradeChart, TradePanel } from '@/modules';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

export const MobileLayout = () => {
  return (
    <div className="md:hidden h-full w-full flex flex-col relative">
      <Tabs defaultValue="trade" className="w-full relative h-full">
        <TabsContent value="trade" className="overflow-y-auto h-[calc(100%-32px)] m-0">
          <div className="border-b h-auto">
            <TradePanel />
          </div>
          <div className="h-96">
            <PairTransactions />
          </div>
        </TabsContent>
        <TabsContent value="chart" className="overflow-y-auto  h-[calc(100%-32px)] m-0">
          <TradeChart />
        </TabsContent>
        <TabsContent value="info" className="overflow-y-auto h-[calc(100%-32px)] m-0">
          <MyPositions />
        </TabsContent>
        <TabsList className="w-full sticky bottom-0 rounded-none p-0 h-8">
          <TabsTrigger
            className="flex-1 rounded-none data-[state=active]:bg-primary data-[state=active]:text-black"
            value="trade"
          >
            Trade
          </TabsTrigger>
          <TabsTrigger
            className="flex-1 rounded-none data-[state=active]:bg-primary data-[state=active]:text-black"
            value="chart"
          >
            Chart
          </TabsTrigger>
          <TabsTrigger
            className="flex-1 rounded-none data-[state=active]:bg-primary data-[state=active]:text-black"
            value="info"
          >
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
