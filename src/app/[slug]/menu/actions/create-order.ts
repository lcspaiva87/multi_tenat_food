'use server';

import type { consumptionMethod } from '@prisma/client';
import { revalidatePath } from 'next/cache';

import { prismaClient } from '@/lib/prisma';

import { removeCpfPunctuation } from '../helpers/cpf';

interface CreateOrderInput {
  customerName: string;
  customerCpf: string;
  products: Array<{
    id: string;
    quantity: number;
  }>;
  consumptionMethod: consumptionMethod;
  slug: string;
}

export const createOrder = async (input: CreateOrderInput) => {
  const restaurant = await prismaClient.restaurant.findUnique({
    where: {
      slug: input.slug,
    },
  });
  if (!restaurant) {
    throw new Error('Restaurant not found');
  }
  const productsWithPrices = await prismaClient.product.findMany({
    where: {
      id: {
        in: input.products.map((product) => product.id),
      },
    },
  });
  const productsWithPricesAndQuantities = input.products.map((product) => ({
    productId: product.id,
    quantity: product.quantity,
    //@ts-ignore
    // biome-ignore lint/style/noNonNullAssertion: <explanation>
    price: productsWithPrices.find((p) => p.id === product.id)!.price,
  }));
  const order = await prismaClient.order.create({
    data: {
      status: 'PENDING',
      customerName: input.customerName,
      customerCpf: removeCpfPunctuation(input.customerCpf),
      orderProducts: {
        createMany: {
          data: productsWithPricesAndQuantities,
        },
      },
      total: productsWithPricesAndQuantities.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0,
      ),
      consumptionMethod: input.consumptionMethod,
      restaurantId: restaurant.id,
    },
  });
  revalidatePath(`/${input.slug}/orders`);
  // redirect(
  //   `/${input.slug}/orders?cpf=${removeCpfPunctuation(input.customerCpf)}`,
  // );
  return order;
};
