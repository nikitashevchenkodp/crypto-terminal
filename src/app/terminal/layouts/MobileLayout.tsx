import { MyPositions } from '@/app/modules';
import React from 'react';

export const MobileLayout = () => {
  return (
    <div className="md:hidden w-full flex flex-col">
      {/* Trade tab */}
      {/* <div className="flex-1">
          <div className="h-full">
            <div className="border-b h-1/2">
              <TradePanel />
            </div>
            <div className="h-1/2">
              <PairTransactions />
            </div>
          </div>
        </div> */}
      {/* Chart tab */}
      {/* <div className="flex-1">
          <div className="h-full">
            <TradeChart />
          </div>
        </div> */}
      {/* My Positions tab */}
      <div className="flex-1">
        <div className="h-full">
          <MyPositions />
        </div>
      </div>
      <div className="flex items-center w-full border-t">
        <button className="flex-1 p-2 border-r">trade</button>
        <button className="flex-1 p-2 border-r">chart</button>
        <button className="flex-1 p-2">info</button>
      </div>
    </div>
  );
};
