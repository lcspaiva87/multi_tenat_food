import { getRestaurantBySlug } from '@/data/get-restaurant-by-slug';
import type { consumptionMethod } from '@prisma/client';
import { notFound } from 'next/navigation';
import RestaurantCategories from './_components/categories';
import RestaurantHeader from './_components/header';

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: consumptionMethod }>;
}
const isConsumptionMethodValid = (consumptionMethod: string) => {
  return ['DINE_IN', 'TAKEAWAY'].includes(consumptionMethod.toUpperCase());
};

export default async function RestaurantMenuPage({
  params,
  searchParams,
}: RestaurantMenuPageProps) {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  const { consumptionMethod } = await searchParams;

  if (!isConsumptionMethodValid(consumptionMethod)) {
    notFound();
  }
  if (!restaurant) {
    notFound();
  }

  return (
    <>
      <RestaurantHeader restaurant={restaurant} />
      <RestaurantCategories restaurant={restaurant} />
    </>
  );
}
