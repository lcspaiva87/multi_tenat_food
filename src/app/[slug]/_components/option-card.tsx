import { Card, CardContent } from '@/components/ui/card';
import type { consumptionMethod } from '@prisma/client';
import type { LucideIcon } from 'lucide-react';
import Link from 'next/link';

interface OptionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  option: consumptionMethod;
  slug: string;
}

export function OptionCard({
  icon: Icon,
  title,
  description,
  option,
  slug,
}: OptionCardProps) {
  return (
    <Card className="w-full cursor-pointer hover:bg-gray-50 transition-all duration-300">
      <Link href={`/${slug}/menu?consumptionMethod=${option}`}>
        <CardContent className="flex flex-col items-center justify-center ">
          <div className="p-3 rounded-full mb-3 bg-gray-100">
            <Icon className="w-8 h-8 text-gray-600" />
          </div>
          <span className="font-medium text-gray-800">{title}</span>
          <p className="text-xs text-gray-500 text-center mt-2">
            {description}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
}
