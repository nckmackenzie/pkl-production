import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

type CardStatProps = {
  className?: string;
  title: string;
  value: number;
  icon: LucideIcon;
  bgColor: string;
  textColor: string;
};

export default function CardStat({
  className,
  title,
  value,
  icon: Icon,
  bgColor,
  textColor,
}: CardStatProps) {
  return (
    <Card className={cn('rounded-md p-2', className)}>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-lg text-primary">{title}</h4>
          <div className="text-4xl font-semibold">{value}</div>
        </div>
        <div
          className={cn(
            'border w-12 h-12 flex items-center justify-center rounded-full bg-green-500/10',
            bgColor
          )}
        >
          <Icon className={cn('w-8 h-8', textColor)} />
        </div>
      </div>
    </Card>
  );
}
