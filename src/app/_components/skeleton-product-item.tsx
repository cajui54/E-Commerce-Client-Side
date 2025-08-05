import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

const SkeletonProductItem = () => {
  return (
    <Skeleton className="flex h-[270px] w-[200px] flex-col justify-between rounded-md px-3 py-2 shadow-sm shadow-neutral-400">
      <div className="h-[140px] w-full rounded-2xl bg-neutral-200"></div>
      <div className="h-[30px] w-full rounded-2xl bg-neutral-200"></div>
      <div className="h-[15px] w-14 rounded-2xl bg-neutral-200"></div>
      <div className="h-[15px] w-14 rounded-2xl bg-neutral-200"></div>
      <div className="mx-auto h-[25px] w-4/5 rounded-2xl bg-neutral-200"></div>
    </Skeleton>
  );
};

export default SkeletonProductItem;
