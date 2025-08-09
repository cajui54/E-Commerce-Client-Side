import React from 'react';
import { tv } from 'tailwind-variants';

import { calculateDiscountPercentage } from '@/_helpers/calculate-discount';
import { PriceDiscountProps } from '@/interfaces/price_discount';

interface PanelPriceProps extends PriceDiscountProps {
  size?: 'lg' | 'xs';
}
const paragraphVariant = tv({
  base: 'text-end tracking-wide font-brand-oxygen',
  variants: {
    color: {
      default: 'font-bold text-neutral-900',
      discountOn: 'font-medium text-neutral-600 text-xs italic line-through',
    },
    size: {
      xs: 'text-xs',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'xs',
  },
});
const PanelPrice = ({
  discountPercentage,
  basePrice,
  size = 'lg',
}: PanelPriceProps) => {
  return (
    <div className="my-1 flex items-center justify-start gap-2">
      {discountPercentage > 0 && (
        <p
          className={paragraphVariant({
            color: 'discountOn',
            size: 'lg',
          })}
        >
          <span>de:</span> R$:
          {Number(basePrice)}
        </p>
      )}
      <p className={paragraphVariant({ size })}>
        {discountPercentage > 0 && <span className="text-[9px]">por: </span>}
        {calculateDiscountPercentage({ discountPercentage, basePrice })}
      </p>
    </div>
  );
};

export default PanelPrice;
