import { prismaClient } from '@/lib/prisma';

export const getRestaurantBySlug = async (slug: string) => {
  const restaurant = await prismaClient.restaurant.findUnique({
    where: {
      slug,
    },
  });

  if (!restaurant) {
    throw new Error('Restaurant not found');
  }

  return restaurant;
};
