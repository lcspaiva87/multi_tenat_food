import { isValidCpf, removeCpfPunctuation } from '@/helpers/cpf';
import { prismaClient } from '@/lib/prisma';
import CpfForm from './components/cpf-form';
import OrderList from './components/order-list';

interface OrdersPageProps {
  searchParams: Promise<{ cpf: string }>;
}

const OrdersPage = async ({ searchParams }: OrdersPageProps) => {
  const { cpf } = await searchParams;
  if (!cpf) {
    return <CpfForm />;
  }
  if (!isValidCpf(cpf)) {
    return <CpfForm />;
  }
  const orders = await prismaClient.order.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      customerCpf: removeCpfPunctuation(cpf),
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImage: true,
        },
      },
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  });
  return <OrderList orders={orders} />;
};

export default OrdersPage;
