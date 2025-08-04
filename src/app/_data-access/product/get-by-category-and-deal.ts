'use server';
import prisma from '@/app/_libs/prisma';

type CategoryProductProps = 'cat' | 'dog' | 'fish' | 'bird';

export const getProductsByCategoryAndDeal = async (
  slug: CategoryProductProps,
) => {
  return prisma.product.findMany({
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
