import { Button } from '@/components/ui/button';
import { Bike, ChefHat, Clock, Shield, Star, Utensils } from 'lucide-react';
import type React from 'react';
import Header from './_componente/header';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section id="features" className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Por que escolher o FoodHub?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <FeatureCard
              icon={<Bike className="w-8 h-8 text-orange-500" />}
              title="Rastreamento em Tempo Real"
              description="Acompanhe sua frota de entrega em tempo real e otimize rotas automaticamente."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-orange-500" />}
              title="Integração Rápida"
              description="Configure e comece a entregar em menos de 24 horas com nossa integração fácil."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-orange-500" />}
              title="Plataforma Segura"
              description="Segurança de nível empresarial para proteger seu negócio e dados dos clientes."
            />
            <FeatureCard
              icon={<ChefHat className="w-8 h-8 text-orange-500" />}
              title="Gestão de Restaurante"
              description="Ferramentas poderosas para gerenciar cardápios, pedidos e operações de cozinha."
            />
            <FeatureCard
              icon={<Star className="w-8 h-8 text-orange-500" />}
              title="Avaliações de Clientes"
              description="Construa confiança com sistema integrado de avaliações e classificações."
            />
            <FeatureCard
              icon={<Utensils className="w-8 h-8 text-orange-500" />}
              title="Análise de Cardápio"
              description="Obtenha insights sobre seus itens mais vendidos e otimize seu cardápio."
            />
          </div>
        </div>
      </section>

      <section className="bg-orange-500 py-20 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para Transformar Seu Negócio de Delivery?
          </h2>
          <p className="text-xl text-white mb-8">
            Junte-se a milhares de restaurantes de sucesso usando o FoodHub para
            fazer seus negócios crescerem.
          </p>
          <Button className="bg-white text-orange-500 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition">
            Comece Seu Teste Grátis
          </Button>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default App;
