import { MyPositions, PairTransactions, TokenInfo, TradePanel } from '@/app/modules';
import React from 'react';

export const DesktopLayout = () => {
  return (
    <div className="hidden md:flex flex-1">
      <div className="h-full border-r w-3/12">
        <div className="border-b w-full h-1/2">
          <TradePanel />
        </div>
        <div className="w-full h-1/2">
          <TokenInfo />
        </div>
      </div>
      <div className="w-9/12">
        <div className="w-full h-2/3 border-b flex">
          <div className="w-8/12 border-r">
            <TradePanel />
          </div>
          <div className="w-4/12">
            <PairTransactions />
          </div>
        </div>
        <div className="w-full h-1/3">
          <MyPositions />
        </div>
      </div>
    </div>
  );
};
