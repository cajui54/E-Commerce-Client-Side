'use server';

import prisma from '@/app/_libs/prisma';

export const getProductById = async (idProduct: string) => {
  return await prisma.product.findUnique({
    where: {
      id: idProduct,
    },
  });
};
