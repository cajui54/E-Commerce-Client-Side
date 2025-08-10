'use server';

import { prismaClient } from '@/lib/prisma';

type CategoryProductProps = 'cat' | 'dog' | 'fish' | 'bird';

export const getProductsByCategoryAndDeal = async (
  slug: CategoryProductProps,
) => {
  return prismaClient.product.findMany({
    where: {
      category: {
        slug,
      },
      AND: {
        discountPercentage: {
          gt: 0,
        },
      },
    },
    include: {
      category: true,
    },
    take: 8,
  });
};
