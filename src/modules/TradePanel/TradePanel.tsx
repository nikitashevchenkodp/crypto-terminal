import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react';

export const TradePanel = () => {
  return (
    <div className="text-muted-foreground p-2">
      <Tabs>
        <TabsList className="w-full rounded p-0 h-auto bg-transparent border">
          <TabsTrigger
            className="flex-1 rounded-none rounded-l bg-transparent data-[state=active]:bg-primary data-[state=active]:text-black"
            value="buy"
          >
            Buy
          </TabsTrigger>
          <TabsTrigger
            className="flex-1 rounded-none rounded-r bg-transparent data-[state=active]:bg-destructive"
            value="sell"
          >
            Sell
          </TabsTrigger>
        </TabsList>
        <TabsContent value="buy">
          <div className="py-2">
            <div className="flex flex-col gap-3 mb-3">
              <Label>Wallet</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <Label>Send</Label>
              <Input />
              <Tabs>
                <TabsList className="w-full bg-transparent border p-0 h-auto">
                  <TabsTrigger
                    className="flex-1 rounded-none rounded-r bg-transparent data-[state=active]:bg-destructive"
                    value="0.1"
                  >
                    0.1
                  </TabsTrigger>
                  <TabsTrigger
                    className="flex-1 rounded-none rounded-r bg-transparent data-[state=active]:bg-destructive"
                    value="0.2"
                  >
                    0.2
                  </TabsTrigger>
                  <TabsTrigger
                    className="flex-1 rounded-none rounded-r bg-transparent data-[state=active]:bg-destructive"
                    value="sell"
                  >
                    0.5
                  </TabsTrigger>
                  <TabsTrigger
                    className="flex-1 rounded-none rounded-r bg-transparent data-[state=active]:bg-destructive"
                    value="1"
                  >
                    1
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div className="flex flex-col gap-3 mb-3">
              <Label>Receive</Label>
              <Input />
            </div>
            <div className="flex justify-between mb-3">
              <p>Gas Price</p>
              <p>59 Gwei</p>
            </div>
            <Button className="w-full">Trade</Button>
          </div>
        </TabsContent>
        <TabsContent value="sell">Sell</TabsContent>
      </Tabs>
    </div>
  );
};
