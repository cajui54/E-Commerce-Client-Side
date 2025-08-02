import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

const SkeletonNavbarCategory = () => {
  return (
    <div className="mx-auto flex h-[100px] w-4/5 items-center justify-center gap-5">
      {Array.from({ length: 5 }, (_, index) => (
        <Skeleton
          key={index}
          className="h-12 w-12 rounded-full bg-neutral-400"
        />
      ))}
    </div>
  );
};

export default SkeletonNavbarCategory;
