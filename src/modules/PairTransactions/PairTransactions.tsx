import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react';

const transaction = [
  { dir: 'in', eth: '1', usd: 3456, wallet: '0x23534', age: '43s' },
  { dir: 'out', eth: '0.5', usd: 1756, wallet: '0x23534', age: '1m' },
  { dir: 'in', eth: '1', usd: 3456, wallet: '0x23534', age: '3m' },
  { dir: 'out', eth: '0.3', usd: 1230, wallet: '0x23534', age: '4m' },
  { dir: 'out', eth: '1', usd: 3456, wallet: '0x23534', age: '15m' },
  { dir: 'in', eth: '2', usd: 6894, wallet: '0x23534', age: '17m' },
  { dir: 'out', eth: '1', usd: 3456, wallet: '0x23534', age: '1h' },
  { dir: 'out', eth: '1', usd: 3456, wallet: '0x23534', age: '1h' },
  { dir: 'out', eth: '1', usd: 3456, wallet: '0x23534', age: '1h' },
  { dir: 'out', eth: '0.5', usd: 1756, wallet: '0x23534', age: '1m' },
  { dir: 'in', eth: '1', usd: 3456, wallet: '0x23534', age: '3m' },
  { dir: 'out', eth: '0.3', usd: 1230, wallet: '0x23534', age: '4m' },
  { dir: 'out', eth: '1', usd: 3456, wallet: '0x23534', age: '15m' },
  { dir: 'in', eth: '2', usd: 6894, wallet: '0x23534', age: '17m' },
];

export const PairTransactions = () => {
  return (
    <div className="w-full h-full overflow-auto">
      <Table>
        <TableHeader className="sticky top-0 z-10 bg-background">
          <TableRow>
            <TableHead className="w-[100px] text-right"></TableHead>
            <TableHead className="text-right">ETH</TableHead>
            <TableHead className="text-right">USD</TableHead>
            <TableHead className="text-right">Wallet</TableHead>
            <TableHead className="text-right">Age</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transaction.map((item, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell className={`text-right ${item.dir === 'in' ? 'text-primary' : 'text-destructive'}`}>
                  {item.dir === 'in' ? '[=>]' : '[<=]'}
                </TableCell>
                <TableCell className={`text-right ${item.dir === 'in' ? 'text-primary' : 'text-destructive'}`}>
                  {item.eth}
                </TableCell>
                <TableCell className="text-right">{item.usd}</TableCell>
                <TableCell className="text-right">{item.wallet}</TableCell>
                <TableCell className="text-right">{item.age}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
