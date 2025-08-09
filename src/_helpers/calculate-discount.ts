import { PriceDiscountProps } from '@/interfaces/price_discount';

import { formatCurrency } from './currency-convert';

export const calculateDiscountPercentage = ({
  basePrice,
  discountPercentage,
}: PriceDiscountProps) => {
  const valueTotal =
    Number(basePrice) - (Number(basePrice) * discountPercentage) / 100;

  return formatCurrency(valueTotal);
};
