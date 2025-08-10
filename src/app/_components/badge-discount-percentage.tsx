import React from 'react';

import { Badge } from '@/components/ui/badge';

const BadgeDiscountPercentage = ({
  discountPercentage,
}: {
  discountPercentage: number;
}) => {
  return (
    <Badge className="absolute right-2 bg-emerald-600">
      {discountPercentage}%
    </Badge>
  );
};

export default BadgeDiscountPercentage;
