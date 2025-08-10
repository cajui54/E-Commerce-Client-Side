'use server';

import { prismaClient } from '@/lib/prisma';

export const getProductById = async (idProduct: string) => {
  return await prismaClient.product.findUnique({
    where: {
      id: idProduct,
    },
  });
};
