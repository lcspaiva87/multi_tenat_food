'use client';
import { Button } from '@/components/ui/button';
import { Utensils } from 'lucide-react';
import Image from 'next/image';
import { MobileMenu } from './mobile-menu';

export default function Header() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80"
          alt="Fundo de comida"
          className="w-full h-full object-cover"
        />
      </div>

      <nav className="relative z-10 flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-2 text-white">
          <Utensils className="w-8 h-8" />
          <span className="text-2xl font-bold">FoodHub</span>
        </div>

        <div className="hidden md:flex space-x-8 text-white">
          <a href="#features" className="hover:text-orange-400 transition">
            Recursos
          </a>
          <a href="#restaurants" className="hover:text-orange-400 transition">
            Restaurantes
          </a>
          <a href="#pricing" className="hover:text-orange-400 transition">
            Preços
          </a>
          <Button className="bg-orange-500 px-6 py-2 rounded-full hover:bg-orange-600 transition">
            Login Restaurante
          </Button>
        </div>

        {/* Menu Mobile */}
        <MobileMenu />
      </nav>

      <div className="relative z-10 flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4">
        <h1 className="text-6xl font-bold text-white mb-6">
          Entregue Felicidade aos Seus Clientes
        </h1>
        <p className="text-xl text-gray-200 mb-8 max-w-2xl">
          Otimize seu negócio de delivery com nossa plataforma SaaS completa.
          Gerencie pedidos, acompanhe entregas e faça seu negócio crescer.
        </p>
        <div className="flex space-y-4 md:flex-row flex-col ">
          <Button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition">
            Iniciar Teste Grátis
          </Button>
          <Button className="bg-white text-gray-900 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Agendar Demonstração
          </Button>
        </div>
      </div>
    </header>
  );
}
