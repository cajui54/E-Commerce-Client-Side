import { Product } from '@/generated/prisma';

import { formatCurrency } from './currency-convert';
type Discount = Pick<Product, 'basePrice' | 'discountPercentage'>;

export const calculateDiscountPercentage = ({
  basePrice,
  discountPercentage,
}: Discount) => {
  const valueTotal =
    Number(basePrice) - (Number(basePrice) * discountPercentage) / 100;

  return formatCurrency(valueTotal);
};
