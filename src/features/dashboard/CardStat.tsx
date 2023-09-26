import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type sizes = 'sm' | 'default';

type CardStatProps = {
  className?: string;
  title: string;
  value: number;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
  size?: sizes;
};

export default function CardStat({
  className,
  title,
  value,
  icon: Icon,
  bgColor,
  textColor,
  size = 'default',
}: CardStatProps) {
  return (
    <Card className={cn('rounded-md p-2', className)}>
      <div className="flex items-center justify-between">
        <div>
          <h4
            className={cn(
              'text-primary',
              size === 'default' ? 'text-lg' : 'text-base'
            )}
          >
            {title}
          </h4>
          <div
            className={cn(
              'font-semibold',
              size === 'default' ? 'text-4xl' : 'text-lg'
            )}
          >
            {value}
          </div>
        </div>
        <div
          className={cn(
            'border flex items-center justify-center rounded-full bg-green-500/10',
            `${bgColor} ${size === 'default' ? 'w-12 h-12' : 'w-8 h-8'}`
          )}
        >
          <Icon
            className={`${textColor} ${
              size === 'default' ? 'w-8 h-8' : 'w-4 h-4'
            }`}
          />
        </div>
      </div>
    </Card>
  );
}
