'use server';

import prisma from '@/app/_libs/prisma';

export const getCategoryProduct = async () => {
  return await prisma.categoryProduct.findMany({});
};
