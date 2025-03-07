import { OptionCard } from '@/app/[slug]/_components/option-card';
import { getRestaurantBySlug } from '@/data/get-restaurant-by-slug';
import { consumptionMethod } from '@prisma/client';
import { ShoppingBag, Utensils } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="flex h-screen w-full flex-col justify-center px-6 pt-24">
      <div className="flex flex-col items-center  gap-2">
        <Image
          src={restaurant.avatarImage}
          alt={restaurant.name}
          width={82}
          height={82}
          className="rounded-lg"
        />
        <h2 className="text-2xl font-semibold">{restaurant.name}</h2>
      </div>
      <div className="pt-24 text-center space-y-2">
        <h3 className="text-2xl font-semibold">Seja bem-vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos aqui para
          oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>

      <div className="pt-14 grid grid-cols-2 gap-4">
        <OptionCard
          icon={ShoppingBag}
          title="Retirada"
          description="Retire seu pedido no restaurante"
          option={consumptionMethod.TAKEAWAY}
          slug={slug}
        />

        <OptionCard
          icon={Utensils}
          title="Comer aqui"
          description="Aproveite sua refeição no local"
          option={consumptionMethod.DINE_IN}
          slug={slug}
        />
      </div>
    </div>
  );
}
