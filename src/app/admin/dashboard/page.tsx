'use client';

import {
  BadgeCheck,
  Bell,
  Calendar,
  ChevronDown,
  Clock,
  DollarSign,
  Filter,
  LayoutGrid,
  LogOut,
  Mail,
  MoreVertical,
  Package,
  Phone,
  Plus,
  Search,
  Settings,
  Star,
  TrendingUp,
  UserPlus,
  UserX,
  Users,
} from 'lucide-react';
import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ProductsTab = () => (
  <>
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Produtos</h1>
        <p className="text-gray-600">Gerencie seu cardápio e estoque</p>
      </div>
      <button
        type="button"
        aria-label="Adicionar produto"
        className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center"
      >
        <Plus className="w-5 h-5 mr-2" />
        Novo Produto
      </button>
    </div>

    <div className="flex gap-4 mb-6">
      <div className="flex-1 relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar produtos..."
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
        />
      </div>
      <button
        type="button"
        aria-label="Filtrar produtos"
        className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
      >
        <Filter className="w-5 h-5 mr-2" />
        Filtros
      </button>
    </div>

    <div className="bg-white rounded-lg shadow">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Produto
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Categoria
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Preço
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estoque
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {[
            {
              id: 1,
              name: 'X-Burger Especial',
              image:
                'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=100&h=100',
              category: 'Hambúrgueres',
              price: 'R$ 32,90',
              stock: 'Em estoque',
              status: 'Ativo',
            },
            {
              id: 2,
              name: 'Pizza Margherita',
              image:
                'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=100&h=100',
              category: 'Pizzas',
              price: 'R$ 45,90',
              stock: 'Em estoque',
              status: 'Ativo',
            },
            {
              id: 3,
              name: 'Salada Caesar',
              image:
                'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=100&h=100',
              category: 'Saladas',
              price: 'R$ 28,90',
              stock: 'Baixo estoque',
              status: 'Ativo',
            },
          ].map((product, index) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full object-cover"
                      src={product.image}
                      alt={product.name}
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {product.name}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{product.category}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{product.price}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    product.stock === 'Em estoque'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {product.stock}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {product.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  type="button"
                  aria-label="Mais opções"
                  className="text-gray-400 hover:text-gray-500"
                >
                  <MoreVertical className="w-5 h-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
);

const OrdersTab = () => (
  <>
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Pedidos</h1>
        <p className="text-gray-600">Gerencie os pedidos em andamento</p>
      </div>
      <div className="flex gap-4">
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option>Todos os status</option>
          <option>Em preparo</option>
          <option>Pronto para entrega</option>
          <option>Em entrega</option>
          <option>Entregue</option>
        </select>
        <button
          type="button"
          aria-label="Atualizar status"
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Atualizar Status
        </button>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Pedidos em Preparo */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Em Preparo</h2>
          <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm">
            3 pedidos
          </span>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map((order) => (
            <div key={order} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-sm font-medium text-gray-900">
                    Pedido #{order}001
                  </span>
                  <p className="text-sm text-gray-600">
                    2x Hambúrguer, 1x Batata
                  </p>
                </div>
                <span className="text-sm text-gray-500">15:30</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium text-purple-600">
                  R$ 89,70
                </span>
                <button
                  type="button"
                  aria-label="Detalhes do pedido"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pronto para Entrega */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Pronto para Entrega
          </h2>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
            2 pedidos
          </span>
        </div>
        <div className="space-y-4">
          {[1, 2].map((order) => (
            <div key={order} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-sm font-medium text-gray-900">
                    Pedido #{order}002
                  </span>
                  <p className="text-sm text-gray-600">
                    1x Pizza, 2x Refrigerante
                  </p>
                </div>
                <span className="text-sm text-gray-500">15:45</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span className="text-sm font-medium text-purple-600">
                  R$ 75,80
                </span>
                <button
                  type="button"
                  aria-label="Detalhes do pedido"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Em Entrega */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Em Entrega</h2>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
            1 pedido
          </span>
        </div>
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-sm font-medium text-gray-900">
                  Pedido #003
                </span>
                <p className="text-sm text-gray-600">3x Salada, 1x Suco</p>
              </div>
              <span className="text-sm text-gray-500">16:00</span>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm font-medium text-purple-600">
                R$ 62,50
              </span>
              <button
                type="button"
                aria-label="Detalhes do pedido"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Detalhes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

const AnalyticsTab = () => (
  <>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
      <p className="text-gray-600">Acompanhe o desempenho do seu negócio</p>
    </div>

    {/* Cards de Métricas */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <DollarSign className="w-6 h-6 text-purple-600" />
          </div>
          <span className="text-sm text-gray-500">vs. mês anterior</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">R$ 23.450</h3>
        <p className="text-sm text-gray-600">Faturamento</p>
        <span className="text-sm text-green-600">+12.5%</span>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-blue-100 p-3 rounded-lg">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
          <span className="text-sm text-gray-500">vs. mês anterior</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">345</h3>
        <p className="text-sm text-gray-600">Pedidos</p>
        <span className="text-sm text-green-600">+8.2%</span>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <Users className="w-6 h-6 text-green-600" />
          </div>
          <span className="text-sm text-gray-500">vs. mês anterior</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">128</h3>
        <p className="text-sm text-gray-600">Novos Clientes</p>
        <span className="text-sm text-green-600">+18.7%</span>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-yellow-100 p-3 rounded-lg">
            <Star className="w-6 h-6 text-yellow-600" />
          </div>
          <span className="text-sm text-gray-500">últimos 30 dias</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
        <p className="text-sm text-gray-600">Avaliação Média</p>
        <span className="text-sm text-green-600">+0.3</span>
      </div>
    </div>

    {/* Gráficos */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Vendas por Período
        </h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Gráfico de Vendas</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Produtos Mais Vendidos
        </h3>
        <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Gráfico de Produtos</p>
        </div>
      </div>
    </div>
  </>
);

const HoursTab = () => (
  <>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">
        Horários de Funcionamento
      </h1>
      <p className="text-gray-600">
        Configure os horários de atendimento do seu estabelecimento
      </p>
    </div>

    <div className="bg-white rounded-lg shadow p-6">
      <div className="grid gap-6">
        {[
          { day: 'Segunda-feira', open: true },
          { day: 'Terça-feira', open: true },
          { day: 'Quarta-feira', open: true },
          { day: 'Quinta-feira', open: true },
          { day: 'Sexta-feira', open: true },
          { day: 'Sábado', open: true },
          { day: 'Domingo', open: false },
        ].map((schedule, index) => (
          <div
            key={schedule.day}
            className="flex items-center justify-between p-4 border-b border-gray-200 last:border-0"
          >
            <div className="flex items-center space-x-4">
              <input
                type="checkbox"
                defaultChecked={schedule.open}
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                onChange={() => {}}
              />
              <span className="font-medium text-gray-900">{schedule.day}</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <select
                  className="border border-gray-300 rounded-lg px-3 py-1.5"
                  disabled={!schedule.open}
                >
                  <option>09:00</option>
                  <option>10:00</option>
                  <option>11:00</option>
                </select>
                <span className="text-gray-500">até</span>
                <select
                  className="border border-gray-300 rounded-lg px-3 py-1.5"
                  disabled={!schedule.open}
                >
                  <option>18:00</option>
                  <option>19:00</option>
                  <option>20:00</option>
                </select>
              </div>
              <button
                type="button"
                aria-label="Mais opções"
                className="text-gray-400 hover:text-gray-500"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Exceções e Feriados
        </h3>
        <div className="flex items-center space-x-4">
          <input
            type="date"
            className="border border-gray-300 rounded-lg px-3 py-1.5"
          />
          <select className="border border-gray-300 rounded-lg px-3 py-1.5">
            <option>Fechado</option>
            <option>Horário Especial</option>
          </select>
          <button
            type="button"
            aria-label="Adicionar exceção"
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  </>
);

const SettingsTab = () => (
  <>
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">Configurações</h1>
      <p className="text-gray-600">
        Gerencie as configurações do seu estabelecimento
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="col-span-2">
        {/* Informações do Restaurante */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Informações do Restaurante
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome do Estabelecimento
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Restaurante Example"
              />
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Descrição
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                rows={3}
                placeholder="Descreva seu estabelecimento"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="contato@example.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Configurações de Entrega */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Configurações de Entrega
          </h2>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="delivery-radius"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Raio de Entrega (km)
              </label>
              <input
                id="delivery-radius"
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="5"
              />
            </div>
            <div>
              <label
                htmlFor="delivery-fee"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Taxa de Entrega
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="R$ 0,00"
              />
            </div>
            <div>
              <label
                htmlFor="delivery-time"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Tempo Médio de Entrega
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                <option>30-45 minutos</option>
                <option>45-60 minutos</option>
                <option>60-90 minutos</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Notificações */}
      <div className="bg-white rounded-lg shadow p-6 h-fit">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Notificações
        </h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">
                Novos Pedidos
              </h3>
              <p className="text-sm text-gray-500">
                Receba notificações de novos pedidos
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                defaultChecked
                onChange={() => {}}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600" />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Avaliações</h3>
              <p className="text-sm text-gray-500">
                Receba notificações de novas avaliações
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                defaultChecked
                onChange={() => {}}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600" />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-900">Relatórios</h3>
              <p className="text-sm text-gray-500">
                Receba relatórios semanais
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                defaultChecked={false}
                onChange={() => {}}
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </>
);

const EmployeesTab = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [employees] = useState([
    {
      id: 1,
      name: 'João Silva',
      role: 'Gerente',
      email: 'joao.silva@example.com',
      phone: '(11) 98765-4321',
      status: 'Ativo',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150',
    },
    {
      id: 2,
      name: 'Maria Santos',
      role: 'Atendente',
      email: 'maria.santos@example.com',
      phone: '(11) 98765-4322',
      status: 'Ativo',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
    },
    {
      id: 3,
      name: 'Pedro Oliveira',
      role: 'Cozinheiro',
      email: 'pedro.oliveira@example.com',
      phone: '(11) 98765-4323',
      status: 'Férias',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150',
    },
  ]);

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Funcionários</h1>
          <p className="text-gray-600">Gerencie sua equipe</p>
        </div>
        <button
          type="button"
          aria-label="Adicionar funcionário"
          onClick={() => setShowAddModal(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 flex items-center"
        >
          <UserPlus className="w-5 h-5 mr-2" />
          Novo Funcionário
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar funcionários..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          />
        </div>
        <select className="border border-gray-300 rounded-lg px-4 py-2">
          <option value="">Todos os cargos</option>
          <option value="gerente">Gerente</option>
          <option value="atendente">Atendente</option>
          <option value="cozinheiro">Cozinheiro</option>
          <option value="entregador">Entregador</option>
        </select>
        <button
          type="button"
          aria-label="Filtrar funcionários"
          className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
        >
          <Filter className="w-5 h-5 mr-2" />
          Filtros
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Funcionário
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cargo
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contato
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ações
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={employee.image}
                        alt={employee.name}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {employee.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {employee.email}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{employee.role}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{employee.phone}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      employee.status === 'Ativo'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {employee.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    type="button"
                    aria-label="Editar funcionário"
                    className="text-purple-600 hover:text-purple-900 mr-3"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    aria-label="Desativar funcionário"
                    className="text-red-600 hover:text-red-900"
                  >
                    Desativar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Novo Funcionário
              </h2>
              <button
                type="button"
                aria-label="Fechar modal de adição de funcionário"
                onClick={() => setShowAddModal(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <UserX className="w-6 h-6" />
              </button>
            </div>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Nome do funcionário"
                />
              </div>

              <div>
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Cargo
                </label>
                <select
                  id="role"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="">Selecione um cargo</option>
                  <option value="gerente">Gerente</option>
                  <option value="atendente">Atendente</option>
                  <option value="cozinheiro">Cozinheiro</option>
                  <option value="entregador">Entregador</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="email@exemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefone
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Cadastrar Funcionário
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('products');

  return (
    <div className="min-h-screen bg-gray-50">
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">DeliveryPro</h1>
        </div>
        <nav className="mt-6">
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <Link
            href="#products"
            onClick={() => setActiveTab('products')}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 ${
              activeTab === 'products' ? 'bg-purple-50 text-purple-700' : ''
            }`}
          >
            <Package className="w-5 h-5 mr-3" />
            Produtos
          </Link>
          {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
          <Link
            href="#orders"
            onClick={() => setActiveTab('orders')}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 ${
              activeTab === 'orders' ? 'bg-purple-50 text-purple-700' : ''
            }`}
          >
            <LayoutGrid className="w-5 h-5 mr-3" />
            Pedidos
          </Link>
          <Link
            href="#employees"
            onClick={() => setActiveTab('employees')}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 ${
              activeTab === 'employees' ? 'bg-purple-50 text-purple-700' : ''
            }`}
          >
            <Users className="w-5 h-5 mr-3" />
            Funcionários
          </Link>
          <Link
            href="#analytics"
            onClick={() => setActiveTab('analytics')}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 ${
              activeTab === 'analytics' ? 'bg-purple-50 text-purple-700' : ''
            }`}
          >
            <TrendingUp className="w-5 h-5 mr-3" />
            Analytics
          </Link>
          <Link
            href="#hours"
            onClick={() => setActiveTab('hours')}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 ${
              activeTab === 'hours' ? 'bg-purple-50 text-purple-700' : ''
            }`}
          >
            <Clock className="w-5 h-5 mr-3" />
            Horários
          </Link>
          <Link
            href="#settings"
            onClick={() => setActiveTab('settings')}
            className={`flex items-center px-6 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-700 ${
              activeTab === 'settings' ? 'bg-purple-50 text-purple-700' : ''
            }`}
          >
            <Settings className="w-5 h-5 mr-3" />
            Configurações
          </Link>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <button
            type="button"
            aria-label="Sair"
            className="flex items-center px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 w-full"
          >
            <LogOut className="w-5 h-5 mr-3" />
            Sair
          </button>
        </div>
      </aside>

      <main className="ml-64 p-8">
        {activeTab === 'products' && <ProductsTab />}
        {activeTab === 'orders' && <OrdersTab />}
        {activeTab === 'employees' && <EmployeesTab />}
        {activeTab === 'analytics' && <AnalyticsTab />}
        {activeTab === 'hours' && <HoursTab />}
        {activeTab === 'settings' && <SettingsTab />}
      </main>
    </div>
  );
}
