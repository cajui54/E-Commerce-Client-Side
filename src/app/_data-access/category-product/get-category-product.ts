'use server';

import { prismaClient } from '@/lib/prisma';

export const getCategoryProduct = async () => {
  return await prismaClient.categoryProduct.findMany({});
};
